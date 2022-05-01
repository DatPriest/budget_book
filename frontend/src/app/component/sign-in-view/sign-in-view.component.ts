import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AppModule } from 'src/app/app.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { UserService } from "../../service/user/user.service";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInForm: FormGroup;
  showPassword: boolean = false;
  user: LoginUserModule;
  errorText: string | undefined;
  constructor(public router: Router, private http: HttpClient, private formBuilder: FormBuilder, private userService: UserService, public app: AppModule) {
    this.userService = new UserService(this.http);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {
    this.router.navigate(['main']);
    const signInData = new LoginUserModule(null, signInForm.value.email, signInForm.value.password);
    this.userService.loginUser(signInData).subscribe(data => {
      if (data.email != null && data.hash != null) {
        this.app.userId = data.userId;
        this.router.navigate(['main']);
      }
    });
  }

  newUser(): void {
    this.router.navigate(['sign-up']);
  }

  newPassword(): void {
    this.router.navigate(['new-password']);
  }

  getUserId(data: LoginUserModule): void {
    /*
      Funktion
    */
    this.app.userId = 1;
  }


  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
}
