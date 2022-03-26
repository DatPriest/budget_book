import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-forgotten-view',
  templateUrl: './password-forgotten-view.component.html',
  styleUrls: ['./password-forgotten-view.component.css']
})
export class PasswordForgottenViewComponent implements OnInit {

  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router) { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  async savePassword(): Promise<void> {
    await this.delay(1500);
    this.router.navigate(['']);
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
