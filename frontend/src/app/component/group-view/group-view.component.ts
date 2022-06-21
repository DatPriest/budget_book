import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';
import { CreateInviteViewComponent } from '../create-invite-view/create-invite-view.component';
import { EditGroupViewComponent } from '../edit-group-view/edit-group-view.component';
import { RemoveMemberViewComponent } from '../remove-member-view/remove-member-view.component';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {

  user$ : Observable<UserModule[]> = of([]);
  group: GroupModule;
  inviteCode: string;
  constructor(public router: Router, public groupService: GroupService, public app: AppModule, public dialog: MatDialog, public alertService: AlertService, public loginService: LoginService) {
    this.user$ = this.groupService.getUsersByGroup(parseInt(localStorage.getItem("groupId")));
  }

  history(): void {
    this.router.navigate(['/group/history']);
  }

  expenses(): void {
    this.router.navigate(['/group/expenses']);
  }

  categorys(): void {
    this.router.navigate(['/group/category']);
  }

  statistic(): void {
    this.router.navigate(['/group/statistics']);
  }

  createInviteDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(CreateInviteViewComponent, dialogConfig)
  }

  editGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(EditGroupViewComponent, dialogConfig)
  }

  deleteUserDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(RemoveMemberViewComponent, dialogConfig)
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
