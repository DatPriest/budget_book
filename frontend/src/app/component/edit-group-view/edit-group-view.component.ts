import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscriber } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { EditGroupModule } from 'src/app/model/edit-group/edit-group.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-edit-group-view',
  templateUrl: './edit-group-view.component.html',
  styleUrls: ['./edit-group-view.component.css']
})
export class EditGroupViewComponent implements OnInit {

  editGroupForm: FormGroup;
  image: string;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditGroupViewComponent>, public groupService: GroupService, public app: AppModule, public alertService: AlertService, public loginService: LoginService, public translate: TranslateService) {

  }

  editGroup(editGroupForm: NgForm): void {
    if (editGroupForm.value.image != '' && editGroupForm.value.groupName != '') {
      const editGroupData = new EditGroupModule(parseInt(localStorage.getItem("groupId")), editGroupForm.value.groupName, this.image);
      console.warn(editGroupData);
      this.groupService.editGroup(editGroupData).subscribe(data => {
        console.error(data);
        this.alertService.successfulAlert(this.translate.instant('alert.editGroup.header'),  this.translate.instant('alert.editGroup.message'),  "success", 2500);
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
    this.loginService.checkLogIn();
    this.editGroupForm = this.formBuilder.group({
      groupname: [''],
      picture: ['']
    });
  }
}
