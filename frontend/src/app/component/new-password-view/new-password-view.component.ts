import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { NewPasswordRequestModule } from 'src/app/model/new-password-request/new-password-request.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { HashingService } from 'src/app/service/hashing/hashing.service';
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
  userID: number;
  hash: string;
  securityQuestion$ : Observable<SecurityQuestionModule[]> = of([]);
  constructor(public router: Router, private formBuilder: FormBuilder, private userService: UserService, public hashService: HashingService) {
    this.securityQuestion$ = this.userService.getSecurityQuestion();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  savePassword(newPasswordForm: NgForm): void {
    if (newPasswordForm.value.password_1 == newPasswordForm.value.password_2) {
      this.hash = this.hashService.encrypt(newPasswordForm.value.password_1);
      if (newPasswordForm.value.securityQuestion != '' && newPasswordForm.value.securityAnswer != '') {
        const newPasswordData = new NewPasswordRequestModule(newPasswordForm.value.email, this.hash, newPasswordForm.value.securityQuestion, newPasswordForm.value.securityAnswer);
        this.userService.passwordForgotRequest(newPasswordData).subscribe(data => {
          this.router.navigate(['/sign-in']);
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
