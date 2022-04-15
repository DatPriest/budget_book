import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { CreateGroup } from 'src/app/model/CreateGroup'
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.css']
})
export class CreateGroupViewComponent implements OnInit {

  createGroupForm: FormGroup;
  image: string| undefined;
  groupImage: undefined;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateGroupViewComponent>, private groupService: GroupService) {}

  createGroup(createGroupForm: NgForm): void {
    if (createGroupForm.value.picture != '' && createGroupForm.value.name != '') {
      createGroupForm.value.id = 1;
      const createGroupData = new CreateGroup(createGroupForm.value.id, this.image, createGroupForm.value.name);
      this.groupService.createGroup(createGroupData).subscribe(data => {
        console.log(data.id);
        this.dialogRef.close();
      });
    }
  }

  closeGroup(): void {
    this.dialogRef.close();
  }

  onChange($event: Event): void {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File): void {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.image = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>): void {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }

  ngOnInit(): void {
    this.createGroupForm = this.formBuilder.group({
      picture: [''],
      groupname: ['']
    });
  }
}
