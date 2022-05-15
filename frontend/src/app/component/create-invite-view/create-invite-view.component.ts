import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppModule } from 'src/app/app.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-create-invite-view',
  templateUrl: './create-invite-view.component.html',
  styleUrls: ['./create-invite-view.component.css']
})
export class CreateInviteViewComponent implements OnInit {

  createInviteForm: FormGroup;
  inviteCode: string;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateInviteViewComponent>, public groupService: GroupService,
    public app: AppModule) { }

  createInvite(): void {
    this.inviteCode = this.createRandomString();
    this.groupService.createInviteCode(this.app.groupId, this.inviteCode);
  }
  closeInvite(): void {
    this.dialogRef.close();
  }

  copyMessage(val: string){
    if (val = "undefined") {
      val = '';
    }
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  createRandomString(): string {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < 10; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    console.warn(result);
    return result;
  }

  ngOnInit(): void {
    this.createInviteForm = this.formBuilder.group({
      inviteCode: ['']
    });
  }

}
