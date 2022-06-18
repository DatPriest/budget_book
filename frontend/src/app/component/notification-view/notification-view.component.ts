import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppModule } from 'src/app/app.module';
import { NotificationModule } from 'src/app/model/notification/notification.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.css']
})
export class NotificationViewComponent implements OnInit {

  notificationForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public alertService: AlertService, public userService: UserService, public dialogRef: MatDialogRef<NotificationViewComponent>, public app: AppModule, public loginService: LoginService, public translate: TranslateService) {

    }

  save(notificationForm: NgForm) {
    const notificationData = new NotificationModule(parseInt(localStorage.getItem("userId")), notificationForm.value.acceptTerms);
    this.userService.notificationEmail(notificationData).subscribe(data => {
      this.alertService.successfulAlert(this.translate.instant('alert.nNotification.header'),  this.translate.instant('alert.nNotification.message'),  "success", 2500);
      this.dialogRef.close();
    });
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
    this.notificationForm = this.formBuilder.group({
      acceptTerms: ['', Validators.requiredTrue]
    })
  }

}
