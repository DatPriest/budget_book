import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/model/Group';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {
  users: User[] = [];

  constructor(public router: Router, private UserService: UserService) {
    this.users.push(new User(1, 'Max', 'Mustermann')),
    this.users.push(new User(2, 'Leon', 'Cordes')),
    this.users.push(new User(3, 'Lisa', 'Müller'))
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async openMenu(): Promise<void> {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Hauptmenü zurück.');

    await this.delay(1500);
    this.router.navigate(['/main']);
  }

  history(): void {
    this.router.navigate(['/history']);
  }

  ausgaben(): void {
    this.router.navigate(['/issues']);
  }

  nofunction(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!');
  }

  ngOnInit(): void {
  }

}
