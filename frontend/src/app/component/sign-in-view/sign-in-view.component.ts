import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  showPassword: boolean = false;

  constructor(public router: Router) {
    //alert('Bitte die Seite nicht übersetzen lassen falls dies angeboten wird!'); Stört etwas
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(): void {
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
