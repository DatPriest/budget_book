import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-invite-view',
  templateUrl: './invite-view.component.html',
  styleUrls: ['./invite-view.component.css']
})
export class InviteViewComponent implements OnInit {

  joinGroupForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<InviteViewComponent>, public groupService: GroupService, public alertService: AlertService, public loginService: LoginService) {

  }

  joinGroup(joinGroupForm: NgForm): void {
    if (joinGroupForm.value.inviteCode != '') {
      this.groupService.joinGroup(joinGroupForm.value.inviteCode).subscribe(data => {
        if (data.valid = true) {
          this.alertService.successfulAlert("Herzlich Glückwunsch!" ,  "Sie sind erfolgreich der Gruppe beigetreten." ,  "success", 2500);
          this.dialogRef.close();
        } else {
          this.alertService.alert("Oops" ,  "Der Einladungslink ist ungültig!" ,  "error");
        }
      })
    } else {
      this.alertService.alert("Oops" ,  "Der Einladungslink ist leer!" ,  "error");
    }
  }

  closeInvite(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
    this.joinGroupForm = this.formBuilder.group({
      inviteCode: ['']
    });
  }

}
