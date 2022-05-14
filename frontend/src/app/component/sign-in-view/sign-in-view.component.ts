import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AppModule } from 'src/app/app.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { HashingService } from 'src/app/service/hashing/hashing.service';
import { UserService } from "../../service/user/user.service";
import { GroupService } from "../../service/group/group.service";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInForm: FormGroup;
  showPassword: boolean = false;
  user: LoginUserModule;
  hash: string;
  constructor(public router: Router, public http: HttpClient, public formBuilder: FormBuilder, public userService: UserService, public app: AppModule,
    public hashService: HashingService, public alertService: AlertService, public groupService: GroupService) { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser(signInForm: NgForm): void {
    this.router.navigate(['main']); // temp

    this.hash = this.hashService.encrypt(signInForm.value.password);
    const signInData = new LoginUserModule(null, signInForm.value.email, this.hash);
    this.userService.loginUser(signInData).subscribe(data => {
      if (data.email != null && data.hash != null) {
        this.app.userId = data.userId;
        this.router.navigate(['main']);
        this.alertService.successfulAlert("Herzlich willkommen!",  "Login war erfolgreich.",  "success", 2500);
      } else {
        this.alertService.alert("Oops",  "E-Mail und Passwort stimmen nicht überein!",  "error");
      }
    });
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
