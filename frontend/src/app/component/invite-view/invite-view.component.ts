import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { JoinGroupModule } from 'src/app/model/join-group/join-group.module';
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
  groupId: any;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<InviteViewComponent>, public groupService: GroupService, public alertService: AlertService, public loginService: LoginService, public translate: TranslateService) {

  }

  joinGroup(joinGroupForm: NgForm): void {
    if (joinGroupForm.value.inviteCode != '') {
      this.groupService.requestGroup(joinGroupForm.value.inviteCode).subscribe(data => {
        if (data != -1) {
          this.groupId = data;
          const joinGroupData = new JoinGroupModule(parseInt(localStorage.getItem("userId")), this.groupId);
          this.groupService.joinGroup(joinGroupData).subscribe(data => {
            this.alertService.successfulAlert(this.translate.instant('alert.invite.header'),  this.translate.instant('alert.invite.message'),  "success", 2500);
            this.dialogRef.close();
          })
        } else {
          this.alertService.alert(this.translate.instant('alert.invite.invalidCode.header'),  this.translate.instant('alert.invite.invalidCode.message'),  "error");
        }
      })
    } else {
      this.alertService.alert(this.translate.instant('alert.invite.emptyCode.header'),  this.translate.instant('alert.invite.invalidCode.message'),  "error");
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
