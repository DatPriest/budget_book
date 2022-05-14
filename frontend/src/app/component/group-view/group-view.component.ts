import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';
import { CreateInviteViewComponent } from '../create-invite-view/create-invite-view.component';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {
  
  user$ : Observable<UserModule[]> = of([]);
  group: GroupModule;
  inviteCode: string;
  constructor(public router: Router, public groupService: GroupService, public app: AppModule, public dialog: MatDialog, public alertService: AlertService) {
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

  createInviteDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(CreateInviteViewComponent, dialogConfig)
  }

  nofunction(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!');
  }

  ngOnInit(): void {
  }

}
