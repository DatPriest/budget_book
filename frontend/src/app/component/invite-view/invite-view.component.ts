import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-view',
  templateUrl: './invite-view.component.html',
  styleUrls: ['./invite-view.component.css']
})
export class InviteViewComponent implements OnInit {

  joinGroupForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<InviteViewComponent>) { }

  joinGroup(joinGroupForm: NgForm): void {

  }

  closeInvite(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.joinGroupForm = this.formBuilder.group({
      inviteCode: ['']
    });
  }

}
