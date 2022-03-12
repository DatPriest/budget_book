import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(public router: Router) { }

  loginUser(): void {
    this.router.navigate(['main']);
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
