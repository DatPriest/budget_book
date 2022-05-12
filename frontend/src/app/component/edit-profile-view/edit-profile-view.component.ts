import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscriber } from 'rxjs';
import { UserModule } from 'src/app/model/user/user.module';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {

  user: UserModule;
  image: string;
  editProfileForm: FormGroup;
  constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) { }

  saveEditUser(editProfileForm: NgForm): void {
    const editProfileData = new UserModule(null, editProfileForm.value.firstName, editProfileForm.value.lastName, null, editProfileForm.value.email, null, null, this.image);
    this.userService.updateProfile(editProfileData).subscribe(data => this.router.navigate(['/profile']));
  }

  backToProfile(): void {
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
    this.editProfileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      image: ['']
    });
  }

}
