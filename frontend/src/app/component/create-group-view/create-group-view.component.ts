import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { CreateGroup } from 'src/app/model/CreateGroup'

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.css']
})
export class CreateGroupViewComponent implements OnInit {

  createGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateGroupViewComponent>, private groupService: GroupService) {}

  createGroup(createGroupForm: NgForm): void {
    if (createGroupForm.value.picture != '' && createGroupForm.value.name != '') {
      const createGroupData = new CreateGroup(createGroupForm.value.id, createGroupForm.value.picture, createGroupForm.value.name);
      this.groupService.createGroup(createGroupData).subscribe(data => {
        console.log(data.id);
        this.dialogRef.close();
      });
    }
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
