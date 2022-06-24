import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UpdatePasswordModule } from 'src/app/model/update-password/update-password.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { HashingService } from 'src/app/service/hashing/hashing.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-password-view',
  templateUrl: './edit-password-view.component.html',
  styleUrls: ['./edit-password-view.component.css']
})
export class EditPasswordViewComponent implements OnInit {

  editPasswordForm: FormGroup;
  hash: string;
  constructor(public router: Router, public formBuilder: FormBuilder, public hashService: HashingService, public alertService: AlertService, public userService: UserService, public loginService: LoginService, public translate: TranslateService) {

  }

  saveNewPassword(editPasswordForm: NgForm): void {
    if (editPasswordForm.value.password_1 == '' && editPasswordForm.value.password_2 == '') {
      this.alertService.alert(this.translate.instant('alert.editPassword.emptyPassword.header'),  this.translate.instant('alert.editPassword.emptyPassword.header'),  "error");
    } else {
      if (editPasswordForm.value.password_1 == editPasswordForm.value.password_2) {
        this.hash = this.hashService.encrypt(editPasswordForm.value.password_1);
        const editPasswordData = new UpdatePasswordModule(editPasswordForm.value.email, this.hash);
        this.userService.updateUserPassword(editPasswordData).subscribe(data => {
          this.alertService.successfulAlert(this.translate.instant('alert.editPassword.header'),  this.translate.instant('alert.editPassword.message'),  "success", 2500);
          this.router.navigate(['/profile']);
        })
      } else {
        this.alertService.alert(this.translate.instant('alert.editPassword.noMatch.header'),  this.translate.instant('alert.editPassword.noMatch.header'),  "error");
      }
    }
  }

  back(): void {
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
    this.editPasswordForm = this.formBuilder.group({
      email: [''],
      password_1: [''],
      password_2: ['']
    })
  }

}
