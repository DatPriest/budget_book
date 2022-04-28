import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { UserModule } from 'src/app/model/user/user.module';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user$ : Observable<UserModule[]> = of([]);
  constructor(public router: Router, private userService: UserService) {
    this.user$ = this.userService.getProfile();
  }

  moveToEditProfile(): void {
    this.router.navigate(['/profile/edit']);
  }

  moveToEditPassword(): void {
    this.router.navigate(['/edit-passwort']);
  }

  deleteProfile(): void {
    if(confirm('Möchten Sie wirklich Ihr Konto löschen?')) {
      console.log('Konto wurde gelöscht.');
    }
  }

  /*moveToEditProfile(user$: UserModule): void {
    this.router.navigate(['/profile/edit' + '/' + user$]);
  }*/

  ngOnInit(): void {
  }

}
