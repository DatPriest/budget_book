import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { NewPasswordRequest } from 'src/app/model/NewPasswordRequest';
import { NewPasswordVerification } from 'src/app/model/NewPasswortVerification';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-new-password-view',
  templateUrl: './new-password-view.component.html',
  styleUrls: ['./new-password-view.component.css']
})
export class NewPasswordViewComponent implements OnInit {

  newPasswordForm: FormGroup;
  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router, private formBuilder: FormBuilder, private userService: UserService) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  savePassword(newPasswordForm: NgForm): void {
    if (newPasswordForm.value.password_1 == newPasswordForm.value.password_2) {
      if (newPasswordForm.value.securityQuestion != '' && newPasswordForm.value.securityAnswer != '') {
        const newPasswordData = new NewPasswordRequest(newPasswordForm.value.email, newPasswordForm.value.securityQuestion, newPasswordForm.value.securityAnswer);
        this.userService.passwordForgotRequest(newPasswordData).subscribe(data => {
          if (data.email != null && data.securityQuestion != null && data.securityAnswer) {
            newPasswordForm.value.hash = newPasswordForm.value.password_1; // hash muss noch gehasht werden.
            const newPasswordVerifyData = new NewPasswordVerification(newPasswordForm.value.hash, 2, newPasswordForm.value.email); // '2' = temp ID 
            this.userService.passwordForgotVerification(newPasswordVerifyData).subscribe(data => this.router.navigate(['/sign-in']));
          }
        });
      }
    } else {
      alert("Passwörter stimmen nicht überein!");
    }
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.newPasswordForm = this.formBuilder.group({
      email: [''],
      password_1: [''],
      password_2: [''],
      securityQuestion: [''],
      securityAnswer: [''],
      hash: ['']
    });
  }
}
