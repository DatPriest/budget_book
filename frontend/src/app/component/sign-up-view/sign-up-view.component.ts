import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router, private userService: UserService) { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  async registrationUser(user: User): Promise<void> {
    await this.delay(1500);
    //this.userService.registerUser(user).subscribe(data => this.router.navigate(['/sign-in', data]));
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}
