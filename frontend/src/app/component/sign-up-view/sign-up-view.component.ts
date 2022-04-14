import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  signUpForm!: FormGroup;
  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router, private userService: UserService, private formBuilder: FormBuilder) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  registrationUser(signUpForm: NgForm): void { // (user: User)
    console.log(signUpForm.value);
    if (signUpForm.value.password_1 == signUpForm.value.password_2) {
      signUpForm.value.hash = signUpForm.value.password_1; // hash muss noch gehasht werden.
    } else {
      console.error("Passwörter stimmen nicht überein!"); // Übergangsweise!
    }
    this.router.navigate(['/sign-in']);
    //this.userService.registerUser(user).subscribe(data => this.router.navigate(['/sign-in', data]));
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      password_1: '',
      password_2: '',
      email: '',
      securityQuestion: '',
      securityAnswer: '',
      hash: ''
    });
  }
}
