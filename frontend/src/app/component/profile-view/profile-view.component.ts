import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { UserModule } from 'src/app/model/user/user.module';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user: UserModule;
  constructor(public router: Router, public userService: UserService, public app: AppModule) {
    this.userService.getProfile(this.app.userId);
  }

  moveToEditProfile(data: UserModule): void {
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

  ngOnInit(): void {
  }

}
