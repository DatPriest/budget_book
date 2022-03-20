import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router) { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  registrationUser(): void {
    //  this.router.navigate(['']);
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
