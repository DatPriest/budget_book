import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { Group } from 'src/app/model/Group'
import { Observable, Subscriber } from 'rxjs';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.css']
})
export class CreateGroupViewComponent implements OnInit {

  createGroupForm: FormGroup;
  image: string;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateGroupViewComponent>, private groupService: GroupService, public app: AppModule) {} // "public app: AppComponent" funktioniert nicht!!

  createGroup(createGroupForm: NgForm): void {
    if (createGroupForm.value.image != '' && createGroupForm.value.groupName != '') {
      const createGroupData = new Group(createGroupForm.value.groupName, this.image);
      this.groupService.createGroup(createGroupData).subscribe(data => {
        // TODO: Create a function in which the group ID is put into the "this.app.groupId" variable.
        this.dialogRef.close();
      });
    };
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
    observable.subscribe((data) => {
      this.image = data;
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
      groupname: [''],
      picture: ['']
    });
  }
}
