import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userId: string;
  constructor(public router: Router) {}

  checkLogIn() {
    this.userId = localStorage.getItem("userId");

    if (this.userId == null) {
      this.router.navigate(['/sign-in']);
    }
  }

  logOut() {
    localStorage.removeItem("userId");
  }
}
