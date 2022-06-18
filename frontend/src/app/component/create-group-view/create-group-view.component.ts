import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { GroupModule } from 'src/app/model/group/group.module';
import { Observable, Subscriber } from 'rxjs';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.css']
})
export class CreateGroupViewComponent implements OnInit {

  createGroupForm: FormGroup;
  image: string;
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateGroupViewComponent>, public groupService: GroupService, public alertService: AlertService, public loginService: LoginService, public translate: TranslateService) {

  }

  createGroup(createGroupForm: NgForm): void {
    if (createGroupForm.value.image != '' && createGroupForm.value.groupName != '') {
      const createGroupData = new GroupModule(null, createGroupForm.value.groupName, this.image, null, -1);
      this.groupService.createGroup(createGroupData).subscribe(data => {
        this.alertService.successfulAlert(this.translate.instant('alert.createGroup.header'),  "",  "success", 2500);
        this.dialogRef.close();
        this.reloadCurrentPage();
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
  private reloadCurrentPage() {
    window. location. reload();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
    this.createGroupForm = this.formBuilder.group({
      groupname: [''],
      picture: ['']
    });
  }
}
