import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AppModule } from 'src/app/app.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { HashingService } from 'src/app/service/hashing/hashing.service';
import { UserService } from "../../service/user/user.service";
import { GroupService } from "../../service/group/group.service";
import { TranslateService } from '@ngx-translate/core';
import { EmailViewComponent } from '../email-view/email-view.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInForm: FormGroup;
  showPassword: boolean = false;
  hash: string;
  constructor(public router: Router, public http: HttpClient, public formBuilder: FormBuilder, public userService: UserService, public app: AppModule, public hashService: HashingService, public alertService: AlertService, public groupService: GroupService, public translate: TranslateService, public dialog: MatDialog) {

  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {
    if (signInForm.value.email == '' && signInForm.value.password == '') {
      this.alertService.alert(this.translate.instant('alert.signIn.emptyPassword.header'),  this.translate.instant('alert.signIn.emptyPassword.message'),  "error");
    } else {
      this.hash = this.hashService.encrypt(signInForm.value.password);
      const signInData = new LoginUserModule(null, signInForm.value.email, this.hash);
      this.userService.loginUser(signInData).subscribe(data => {
        if (data != undefined) {
          localStorage.setItem("userId", data.userId.toString());
          this.router.navigate(['/main']);
          this.alertService.successfulAlert(this.translate.instant('alert.signIn.header'),  this.translate.instant('alert.signIn.message'),  "success", 2500);
        } else {
          this.alertService.alert(this.translate.instant('alert.signIn.noMatch.header'),  this.translate.instant('alert.signIn.noMatch.message'),  "error");
        }
      });
    }
  }

  newUser(): void {
    this.router.navigate(['/sign-up']);
  }

  newPassword(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(EmailViewComponent, dialogConfig).afterOpened().subscribe(result => {
      localStorage.setItem("newPassword", "true");
    });
  }

  ngOnInit(): void {
    this.router.navigate(['/sign-in']);
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
}
