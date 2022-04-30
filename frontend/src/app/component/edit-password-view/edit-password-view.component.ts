import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-password-view',
  templateUrl: './edit-password-view.component.html',
  styleUrls: ['./edit-password-view.component.css']
})
export class EditPasswordViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
  }

}
