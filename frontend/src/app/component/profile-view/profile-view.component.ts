import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { UserModule } from 'src/app/model/user/user.module';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InviteViewComponent } from '../invite-view/invite-view.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user: UserModule;
  constructor(public router: Router, public userService: UserService, public app: AppModule, public dialog: MatDialog) {
    this.userService.getProfile(this.app.userId);
  }

  moveToEditProfile(data: UserModule): void {
    this.router.navigate(['/profile/edit']);
  }

  moveToEditPassword(): void {
    this.router.navigate(['/edit-passwort']);
  }

  deleteProfile(): void {
    if(confirm('Möchten Sie wirklich Ihr Konto löschen?')) {
      console.log('Konto wurde gelöscht.');
    }
  }

  joinGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(InviteViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
