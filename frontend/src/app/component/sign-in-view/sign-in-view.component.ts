import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  showPassword: boolean = false;
  constructor(public router: Router, private toast: NgToastService) { }

  /*showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
    // https://www.npmjs.com/package/ng-angular-popup
  }*/

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(): void {
    //this.showSuccess();
    this.router.navigate(['main']);
  }

  newUser(): void {
    this.router.navigate(['sign-up']);
  }

  newPassword(): void {
    this.router.navigate(['new-password']);
  }

  ngOnInit(): void {
  }
}
