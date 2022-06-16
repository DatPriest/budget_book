import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { EditGroupModule } from 'src/app/model/edit-group/edit-group.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-edit-group-view',
  templateUrl: './edit-group-view.component.html',
  styleUrls: ['./edit-group-view.component.css']
})
export class EditGroupViewComponent implements OnInit {

  editGroupForm: FormGroup;
  image: string;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditGroupViewComponent>,
      public groupService: GroupService, public app: AppModule, public alertService: AlertService) { }

  editGroup(editGroupForm: NgForm): void {
    if (editGroupForm.value.image != '' && editGroupForm.value.groupName != '') {
      const editGroupData = new EditGroupModule(parseInt(localStorage.getItem("groupId")), editGroupForm.value.groupName, this.image);
      this.groupService.editGroup(editGroupData).subscribe(data => {
        this.alertService.successfulAlert("Gruppe erfolgreich geupdated!",  "",  "success", 2500);
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
    this.editGroupForm = this.formBuilder.group({
      groupname: [''],
      picture: ['']
    });
  }
}
