import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupViewComponent } from '../create-group-view/create-group-view.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  groups: Group[] = [];

  constructor(public router: Router, public dialog: MatDialog) { }

  createGroupDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateGroupViewComponent, dialogConfig);
  }

  openGroup(): void {
    this.router.navigate(['/group']);
  }

  openMenu(): void {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Login zurück.');
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}
