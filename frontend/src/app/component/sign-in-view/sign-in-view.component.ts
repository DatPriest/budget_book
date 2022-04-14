import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {LoginUser} from "../../model/LoginUser";
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInForm!: FormGroup;
  user: User;
  showPassword: boolean = false;
  constructor(public router: Router, private http: HttpClient, private formBuilder: FormBuilder, private service: UserService) {
    this.service = new UserService(this.http);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {

    //console.log(signInForm.value);
    let user: LoginUser = new LoginUser(signInForm.value.email, signInForm.value.password);
    //console.log(user);

    this.service.loginUser(user).subscribe(value => {
      this.user = new User(value.firstName, value.lastName, value.password, value.email, value.securityQuestion, value.securityAnswer)
      if(this.user.email == signInForm.value.email){
        console.log("Benutzername " + signInForm.value.email + " bekannt")
        if(this.user.password == signInForm.value.password){
          console.log("Passwort bekannt");
          this.router.navigate(['main']);
        } else{console.error("Falsches Passwort")};
      } else{console.error("Falscher Benutzername")};
    });
    this.router.navigate(['main']) // Temp - LBU140422
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
