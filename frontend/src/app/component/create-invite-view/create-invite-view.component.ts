import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModule } from 'src/app/app.module';
import { GroupModule } from 'src/app/model/group/group.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-create-invite-view',
  templateUrl: './create-invite-view.component.html',
  styleUrls: ['./create-invite-view.component.css']
})
export class CreateInviteViewComponent implements OnInit {

  createInviteForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateInviteViewComponent>, public groupService: GroupService, public app: AppModule, public loginService: LoginService, @Inject(MAT_DIALOG_DATA) public data: any, private clipboardApi: ClipboardService) {

  }

  copyText(val: string) {
    this.clipboardApi.copyFromContent(val)
  }

  closeInvite(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
