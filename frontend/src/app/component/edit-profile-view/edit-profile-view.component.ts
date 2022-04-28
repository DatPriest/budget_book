import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModule } from 'src/app/model/user/user.module';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {

  user$ : Observable<UserModule[]> = of([]);
  constructor(private userService: UserService) { }

  saveEditUser(user$: UserModule): void { }

  ngOnInit(): void {
  }

}
