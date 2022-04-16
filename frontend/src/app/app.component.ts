import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userId: number = 0;
  groupId: number = 0;
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/sign-in']);
  }
}
