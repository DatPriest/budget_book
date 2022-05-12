import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {
  user$ : Observable<UserModule[]> = of([]);
  group: GroupModule;
  constructor(public router: Router, public groupService: GroupService, public app: AppModule) {
    this.user$ = this.groupService.getUsersByGroup(this.app.groupId);
  }

  openMenu(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Hauptmenü zurück.');

    this.router.navigate(['/main']);
  }

  history(): void {
    this.router.navigate(['/history']);
  }

  ausgaben(): void {
    this.router.navigate(['/expenses']);
  }

  categories(): void {
    this.router.navigate(['/categorie']);
  }

  nofunction(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!');
  }

  ngOnInit(): void {
  }

}
