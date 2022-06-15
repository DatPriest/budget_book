import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppModule } from 'src/app/app.module';
import { NotificationModule } from 'src/app/model/notification/notification.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.css']
})
export class NotificationViewComponent implements OnInit {

  notificationForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public alertService: AlertService, public userService: UserService,
    public dialogRef: MatDialogRef<NotificationViewComponent>, public app: AppModule) { }

  save(notificationForm: NgForm) {
    const notificationData = new NotificationModule(parseInt(localStorage.getItem("userId")), notificationForm.value.acceptTerms);
    this.userService.notificationEmail(notificationData).subscribe(data => {
      this.alertService.successfulAlert("Erfolgreich geändert!",  "",  "success", 2500);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    this.notificationForm = this.formBuilder.group({
      acceptTerms: ['', Validators.requiredTrue]
    })
  }

}
