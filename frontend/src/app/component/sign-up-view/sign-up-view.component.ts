import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, of, Subscriber } from 'rxjs';
import { UserModule } from 'src/app/model/user/user.module';
import { UserService } from 'src/app/service/user/user.service';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { HashingService } from 'src/app/service/hashing/hashing.service';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  signUpForm: FormGroup;
  showPassword: boolean = false;
  showPasswordReplay: boolean = false;
  image: string;
  securityQuestion$ : Observable<SecurityQuestionModule[]> = of([]);
  hash: string;
  constructor(public router: Router, public userService: UserService, public formBuilder: FormBuilder,
    public hashService: HashingService, public alertService: AlertService) {
    this.securityQuestion$ = this.userService.getSecurityQuestion();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordReplay(): void {
    this.showPasswordReplay = !this.showPasswordReplay;
  }

  registrationUser(signUpForm: NgForm): void {
    if (signUpForm.value.password_1 == '' && signUpForm.value.password_2 == '') {
      this.alertService.alert("Oops",  "Passwörter dürfen nicht leer sein!",  "error");
    } else {
      if (signUpForm.value.password_1 == signUpForm.value.password_2) {
        if (signUpForm.value.securityQuestion != '' && signUpForm.value.securityAnswer != '') {
          this.hash = this.hashService.encrypt(signUpForm.value.password_1);
          const signUpData = new UserModule(null, signUpForm.value.firstName, signUpForm.value.lastName, this.hash, signUpForm.value.email, signUpForm.value.securityQuestion, signUpForm.value.securityAnswer, this.image);
          this.userService.registerUser(signUpData).subscribe(data => {
            this.alertService.successfulAlert("Erfolgreich registriert!",  "",  "success", 2500);
            this.router.navigate(['/sign-in']); //temp
          });
        } else {
          this.alertService.alert("Oops",  "Bitte eine Sicherheitsfrage und eine Antwort ausfüllen!",  "error");
        }
      } else {
          this.alertService.alert("Oops",  "Passwörter stimmen nicht überein!",  "error");
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/sign-in']);
  }

  onChange($event: Event): void {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File): void {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((data) => {
      this.image = data;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>): void {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      password_1: [''],
      password_2: [''],
      email: [''],
      securityQuestion: [''],
      securityAnswer: [''],
      image: ['']
    });
  }
}
