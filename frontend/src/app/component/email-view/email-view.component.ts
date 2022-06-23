import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-email-view',
  templateUrl: './email-view.component.html',
  styleUrls: ['./email-view.component.css']
})
export class EmailViewComponent implements OnInit {

  constructor(public router: Router, public userService: UserService, public dialogRef: MatDialogRef<EmailViewComponent>, public alertService: AlertService, public loginService: LoginService) { }

  getEmail(): void {
    //this.userService
    this.router.navigate(['/new-password']);
    this.dialogRef.close(true);
  }

  back(): void {
    this.dialogRef.close();
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
