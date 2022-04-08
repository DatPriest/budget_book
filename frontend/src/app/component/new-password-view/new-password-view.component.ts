import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-password-view',
  templateUrl: './new-password-view.component.html',
  styleUrls: ['./new-password-view.component.css']
})
export class NewPasswordViewComponent implements OnInit {

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
    this.router.navigate(['/sign-in']);
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}
