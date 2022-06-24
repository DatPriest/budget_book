import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.css']
})
export class EmailViewComponent implements OnInit {

  getEmailForm: FormGroup;
  constructor(public router: Router, public userService: UserService, public dialogRef: MatDialogRef<EmailViewComponent>, public alertService: AlertService, public loginService: LoginService, public translate: TranslateService) { }

  getEmail(getEmailForm: NgForm): void {
    if (getEmailForm.value.email != '') {
      this.dialogRef.close(this.userService.getUserIdByEmail(getEmailForm.value.email).subscribe(data => {
        if (data != null) {
          localStorage.setItem("userId", data.toString());
          this.router.navigate(['/new-password']);
        } else {
          this.alertService.alert(this.translate.instant('alert.email.invalid.header'), this.translate.instant('alert.email.invalid.message'), "error");
        }
      }));
    } else {
      this.alertService.alert(this.translate.instant('alert.email.header'), this.translate.instant('alert.email.message'), "error");
    }
  }

  close(): void {
    localStorage.setItem("newPassword", "false");
    this.dialogRef.close();
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
