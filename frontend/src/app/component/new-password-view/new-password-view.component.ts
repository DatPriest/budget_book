import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, Observable, of } from 'rxjs';
import { NewPasswordModule } from 'src/app/model/new-password/new-password.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { HashingService } from 'src/app/service/hashing/hashing.service';
import { UserService } from 'src/app/service/user/user.service';
import { EmailViewComponent } from '../email-view/email-view.component';

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
  securityQuestion: SecurityQuestionModule = new SecurityQuestionModule(null, null);
  constructor(public router: Router, public formBuilder: FormBuilder, public userService: UserService, public hashService: HashingService, public alertService: AlertService, public translate: TranslateService) {
    this.getSecQuestion();
  }

  private async getSecQuestion(){
    this.securityQuestion = await firstValueFrom(this.userService.getSecurityQuestionByUserId(parseInt(localStorage.getItem("userId"))));
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  savePassword(newPasswordForm: NgForm): void {
    if (newPasswordForm.value.password_1 == '' && newPasswordForm.value.password_2 == '') {
      this.alertService.alert(this.translate.instant('alert.newPassword.emptyPassword.header'),  this.translate.instant('alert.newPassword.emptyPassword.message'),  "error");
    } else {
      if (newPasswordForm.value.password_1 == newPasswordForm.value.password_2) {
        this.hash = this.hashService.encrypt(newPasswordForm.value.password_1);
        if (newPasswordForm.value.securityQuestion != '' && newPasswordForm.value.securityAnswer != '') {
          const newPasswordData = new NewPasswordModule(parseInt(localStorage.getItem("userId")), this.hash, newPasswordForm.value.securityQuestion, newPasswordForm.value.securityAnswer);
          this.userService.passwordForgotRequest(newPasswordData).subscribe(data => {
            this.alertService.successfulAlert(this.translate.instant('alert.newPassword.header'),  this.translate.instant('alert.newPassword.message'),  "success", 2500);
            this.router.navigate(['/sign-in']);
          });
        } else {
          this.alertService.alert(this.translate.instant('alert.newPassword.emptySQuestion.header'),  this.translate.instant('alert.newPassword.emptySQuestion.message'),  "error");
        }
      } else {
        this.alertService.alert(this.translate.instant('alert.newPassword.noMatch.header'),  this.translate.instant('alert.newPassword.noMatch.message'),  "error");
      }
    }
  }

  cancel(): void {
    localStorage.setItem("newPassword", "false");
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {

  }
}
