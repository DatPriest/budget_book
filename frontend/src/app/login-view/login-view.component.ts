import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  hidepasswort: boolean = false;
  constructor(public router: Router) { }

  showPassword(): boolean {
    if(this.hidepasswort == true) {
      this.hidepasswort = false;
    }
    else {
      this.hidepasswort = true;
    }
    return this.hidepasswort;
  }

  loginUser(): void {
    this.router.navigate(['main-menu']);
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
