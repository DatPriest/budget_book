import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { NewPasswordRequestModule } from 'src/app/model/new-password-request/new-password-request.module';
import { NewPasswordVerificationModule } from 'src/app/model/new-password-verification/new-password-verification.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
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
  securityQuestion$ : Observable<SecurityQuestionModule[]> = of([]);
  constructor(public router: Router, private formBuilder: FormBuilder, private userService: UserService) {
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
      if (newPasswordForm.value.securityQuestion != '' && newPasswordForm.value.securityAnswer != '') {
        const newPasswordData = new NewPasswordRequestModule(newPasswordForm.value.email, newPasswordForm.value.password_1, newPasswordForm.value.securityQuestion, newPasswordForm.value.securityAnswer);
        this.userService.passwordForgotRequest(newPasswordData).subscribe(data => {
          console.warn(data); // Gibt eine ganzen User aus.
          console.error(data.email + ' ' + data.securityQuestion + ' ' + data.securityAnswer); // Gibt die E-Mail aus, rest ist undefiniert.
          /*if (data.email != null && data.securityQuestion != null && data.securityAnswer != null) {
            newPasswordForm.value.hash = newPasswordForm.value.password_1; // hash muss noch gehasht werden. MH-18
            const newPasswordVerifyData = new NewPasswordVerification(newPasswordForm.value.hash, 1, newPasswordForm.value.email); // '2' = temp ID
            this.userService.passwordForgotVerification(newPasswordVerifyData).subscribe(data => this.router.navigate(['/sign-in']));
          }*/
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
