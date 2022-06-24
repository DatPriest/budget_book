import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router: Router) {}

  checkLogIn() {
    if (localStorage.getItem("userId") == null) {
      this.router.navigate(['/sign-in']);
    }
  }

  logOut() {
    localStorage.removeItem("userId");
  }
}
