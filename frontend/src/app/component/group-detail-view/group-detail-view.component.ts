import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/model/Group';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-group-detail-view',
  templateUrl: './group-detail-view.component.html',
  styleUrls: ['./group-detail-view.component.css']
})
export class GroupDetailViewComponent implements OnInit {
  users: User[] = [];

  constructor(public router: Router, private userService: UserService) {
    this.users.push(new Group(1, 'Max')),
    this.users.push(new Group(2, 'Leon')),
    this.users.push(new Group(3, 'Lisa'))
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async openMenu(): Promise<void> {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Hauptmenü zurück.');

    await this.delay(1500);
    this.router.navigate(['/main-menu']);
  }

  history(): void {
    this.router.navigate(['/history']);
  }

  ausgaben(): void {
    this.router.navigate(['/ausgaben']);
  }

  nofunction(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!');
  }

  ngOnInit(): void {
  }

}
