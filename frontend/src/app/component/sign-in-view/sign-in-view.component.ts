import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  form: FormGroup | undefined;
  signInForm!: FormGroup;

  showPassword: boolean = false;
  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''

    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {
    console.log(signInForm.value);
    this.router.navigate(['main']);
  }

  newUser(): void {
    this.router.navigate(['sign-up']);
  }

  newPassword(): void {
    this.router.navigate(['new-password']);
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email:[''],
      password:['']})
  }
}
