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

  profile: UserModule[] = [];
  //user$ : Observable<UserModule[]> = of([]);
  constructor(public router: Router, private userService: UserService) {
    //this.user$ = this.userService.getProfile();
    this.profile.push(new UserModule('Lukas', 'Bullwinkel', null, 'lukas.bullwinkel@web.de', null, null, '55555585858588448578'));
  }

  moveToEditProfile(): void {
    this.router.navigate(['/profile/edit']);
  }

  /*moveToEditProfile(user$: UserModule): void {
    this.router.navigate(['/profile/edit' + '/' + user$]);
  }*/

  moveToEditPassword(): void {
    this.router.navigate(['/edit-passwort']);
  }

  deleteProfile(): void {
    if(confirm('Möchten Sie wirklich Ihr Konto löschen?')) {
      console.log('Konto wurde gelöscht.');
    }
  }

  ngOnInit(): void {
  }

}
