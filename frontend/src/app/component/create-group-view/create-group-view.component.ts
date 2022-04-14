import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.css']
})
export class CreateGroupViewComponent implements OnInit {

  createGroupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateGroupViewComponent>) {}

  createGroup(createGroupForm: NgForm): void {
    console.log('Group "' + createGroupForm.value.name + '" was created.');
    console.log(createGroupForm.value);
  }

  closeGroup(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createGroupForm = this.formBuilder.group({
      picture: [''],
      groupname: ['']
    });
  }
}
