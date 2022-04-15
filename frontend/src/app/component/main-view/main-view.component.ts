import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CreateGroup } from 'src/app/model/CreateGroup';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupViewComponent } from '../create-group-view/create-group-view.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  groups: CreateGroup[] = [];

  constructor(public router: Router, public dialog: MatDialog) {
    //this.groups.push(new Group(1,"Gruppe 1")),
    //this.groups.push(new Group(2,"Gruppe 2")),
    //this.groups.push(new Group(3,"Gruppe 3"))
  }

  createGroupDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateGroupViewComponent, dialogConfig);
  }

  openGroup(id: number, name: string): void {
    console.log('Loading Group...\n' + id + ' ' + name);
    this.router.navigate(['/group']);
  }

  openMenu(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Login zurück.');
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}
