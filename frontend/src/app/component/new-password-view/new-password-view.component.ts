import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { NewPasswordModule } from 'src/app/model/new-password/new-password.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { AlertService } from 'src/app/service/alert/alert.service';
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
  hash: string;
  securityQuestion$ : Observable<SecurityQuestionModule[]> = of([]);
  constructor(public router: Router, public formBuilder: FormBuilder, public userService: UserService, public hashService: HashingService, public alertService: AlertService) {
    this.securityQuestion$ = this.userService.getSecurityQuestion();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  savePassword(newPasswordForm: NgForm): void {
    if (newPasswordForm.value.password_1 == '' && newPasswordForm.value.password_2 == '') {
      this.alertService.alert("Oops",  "Passwörter dürfen nicht leer sein!",  "error");
    } else {
      if (newPasswordForm.value.password_1 == newPasswordForm.value.password_2) {
        this.hash = this.hashService.encrypt(newPasswordForm.value.password_1);
        if (newPasswordForm.value.securityQuestion != '' && newPasswordForm.value.securityAnswer != '') {
          const newPasswordData = new NewPasswordModule(newPasswordForm.value.email, this.hash, newPasswordForm.value.securityQuestion, newPasswordForm.value.securityAnswer);
          this.userService.passwordForgotRequest(newPasswordData).subscribe(data => {
            this.alertService.successfulAlert("Passwort erfolgreich zurückgesetzt!",  "",  "success", 2500);
            this.router.navigate(['/sign-in']);
          });
        } else {
          this.alertService.alert("Oops",  "Bitte eine Sicherheitsfrage und eine Antwort ausfüllen!",  "error");
        }
      } else {
        this.alertService.alert("Oops",  "Passwörter stimmen nicht überein!",  "error");
      }
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
