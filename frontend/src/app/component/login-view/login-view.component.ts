import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  showPassword: boolean = false;
  constructor(public router: Router, private toast: NgToastService) { }

  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
    // https://www.npmjs.com/package/ng-angular-popup
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(): void {
    this.showSuccess();
    //this.router.navigate(['main-menu']);
  }

  newUser(): void {
    this.router.navigate(['register']);
  }

  newPassword(): void {
    this.router.navigate(['password-forgotten']);
  }

  ngOnInit(): void {
  }
}
