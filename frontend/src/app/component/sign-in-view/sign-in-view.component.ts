import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/model/User';
import { LoginUser } from "../../model/LoginUser";
import { UserService } from "../../service/user/user.service";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInForm: FormGroup;
  showPassword: boolean = false;
  user: LoginUser;
  errorText: string | undefined;
  constructor(public router: Router, private http: HttpClient, private formBuilder: FormBuilder, private userService: UserService) {
    this.userService = new UserService(this.http);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {
    const signInData = new LoginUser(signInForm.value.email, signInForm.value.password);
    this.userService.loginUser(signInData).subscribe(data => {
      if (data.email == signInForm.value.email) {
        if (data.hash == signInForm.value.password) {
          this.router.navigate(['main']);
        } else {
            alert("Falsches Passwort!");
          }
      } else {
          alert("Falsche E-Mail!");
      }
    });

    //Zum vorstellen des projektes
    //TODO: Passwortprüfung wird später mit kompletter funktion implementiert
    //this.router.navigate(['main'])
    //console.log(signInForm.value);
    //let user: LoginUser = new LoginUser(signInForm.value.email, signInForm.value.password);
    //console.log(user);

    // this.service.loginUser(user).subscribe(value => {this.user = new User(value.firstName, value.lastName, value.password, value.email, value.securityQuestion, value.securityAnswer)})
    // this.service.loginUser(user).subscribe(value => {console.log(value)})
    // if(this.user.email == signInForm.value.email){
    //   console.log("Benutzername " + signInForm.value.email + " bekannt")
    //   if(this.user.password == signInForm.value.password){
    //     console.log("Passwort bekannt")
    //     this.router.navigate(['main'])
    //   }else{console.error("Falsches Passwort")}
    // }else{console.error("Falscher Benutzername")}
    //this.service.loginUser(user).subscribe(value => {console.log(value.password)})
    //console.error("Benutzername nicht verfügbar")

  }

  newUser(): void {
    this.router.navigate(['sign-up']);
  }

  newPassword(): void {
    this.router.navigate(['new-password']);
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
}
