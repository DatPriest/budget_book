import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(public router: Router) { }

  moveToEditProfile(): void {
    this.router.navigate(['/profile/edit']);
  }

  ngOnInit(): void {
  }

}
