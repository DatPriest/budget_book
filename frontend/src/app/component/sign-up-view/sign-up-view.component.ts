import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

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

  async registrationUser(): Promise<void> {
    await this.delay(1500);
    this.router.navigate(['/sign-in']);
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}
