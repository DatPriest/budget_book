import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { UserModule } from 'src/app/model/user/user.module';
import { AppModule } from 'src/app/app.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InviteViewComponent } from '../invite-view/invite-view.component';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user: UserModule;
  constructor(public router: Router, public userService: UserService, public app: AppModule, public dialog: MatDialog, public alertService: AlertService, public loginService: LoginService) {
    this.user = this.userService.getProfile(parseInt(localStorage.getItem("userId")));
  }

  moveToEditProfile(data: UserModule): void {
    this.router.navigate(['/profile/edit', data]);
  }

  moveToEditPassword(): void {
    this.router.navigate(['/profile/edit-passwort']);
  }

  deleteProfile(): void {
    this.alertService.deleteAccountAlert();
  }

  joinGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(InviteViewComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
