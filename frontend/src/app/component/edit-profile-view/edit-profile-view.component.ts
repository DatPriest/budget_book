import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscriber } from 'rxjs';
import { UserProfileModule } from 'src/app/model/user-profile/user-profile.module';
import { UserModule } from 'src/app/model/user/user.module';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {

  user: UserProfileModule;
  image: string;
  editProfileForm: FormGroup;
  constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router, public loginService: LoginService) {
    //this.user = this.userService.getProfile(parseInt(localStorage.getItem("userId")));
  }

  saveEditUser(editProfileForm: NgForm): void {
    const editProfileData = new UserProfileModule(parseInt(localStorage.getItem("userId")), editProfileForm.value.firstName, editProfileForm.value.lastName, editProfileForm.value.email, this.image);
    this.userService.updateProfile(editProfileData).subscribe(data => this.router.navigate(['/profile']));
  }

  back(): void {
    this.router.navigate(['/profile']);
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
    this.loginService.checkLogIn();
  }

}
