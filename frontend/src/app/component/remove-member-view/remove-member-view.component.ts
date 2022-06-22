import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { UserModule } from 'src/app/model/user/user.module';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-remove-member-view',
  templateUrl: './remove-member-view.component.html',
  styleUrls: ['./remove-member-view.component.css']
})
export class RemoveMemberViewComponent implements OnInit {

  user$ : Observable<UserModule[]> = of([]);
  constructor(public loginService: LoginService, public groupService: GroupService, private dialogRef: MatDialogRef<RemoveMemberViewComponent>) {
    this.user$ = this.groupService.getUsersByGroup(parseInt(localStorage.getItem("groupId")));
  }

  delete(userId: number): void {
    this.groupService.deleteUser(userId, parseInt(localStorage.getItem("groupId")));
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
