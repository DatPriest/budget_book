import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-password-view',
  templateUrl: './new-password-view.component.html',
  styleUrls: ['./new-password-view.component.css']
})
export class NewPasswordViewComponent implements OnInit {

  form: FormGroup | undefined;
  signInForm!: FormGroup;
  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: '',
      password_1: '',
      password_2: '',
      securityQuestion: '',
      securityAnswer: '',
      hash: ''
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  savePassword(newPasswordForm: NgForm): void {
    console.log(newPasswordForm.value);
    if (newPasswordForm.value.password_1 == newPasswordForm.value.password_2) {
      newPasswordForm.value.hash = newPasswordForm.value.password_1;
    } else {
      console.error("Passwörter stimmen nicht überein!"); // Übergangsweise!
    }
    //this.router.navigate(['/sign-in']);
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password_1: '',
      password_2: '',
      securityQuestion: '',
      securityAnswer: '',
      hash: ''
    });
  }
}
