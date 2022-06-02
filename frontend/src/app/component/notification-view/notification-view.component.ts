import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<NotificationViewComponent>) { }

  save(notificationForm: NgForm) {
    /*
    this.userService.notification(notificationForm.value.acceptTerms).subscribe(data => {
      this.alertService.successfulAlert("Erfolgreich geändert!",  "",  "success", 2500);
      this.dialogRef.close();
    });
    */
  }

  ngOnInit(): void {
    this.notificationForm = this.formBuilder.group({
      acceptTerms: ['', Validators.requiredTrue]
    })
  }

}
