import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';
import { GroupService } from 'src/app/service/group/group.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  groupname: string;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  groups: Group[] = [];
  groupname: string | undefined;

  constructor(public router: Router, private groupService: GroupService, public dialog: MatDialog) {
    this.groups.push(new Group(1,"Teddybär Bande")),
    this.groups.push(new Group(2,"Rosenrot")),
    this.groups.push(new Group(3,"Rainbow Gang"))
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  createGroupDialog(): void {
    const dialogRef = this.dialog.open(MainViewComponentDialog, {
      data: {groupname: this.groupname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.groupname = result;
    });
  }

  openGroup(id: number, name: string): void {
    console.log('Loading Group...\n' + id + ' ' + name);
    this.router.navigate(['/group']);
  }

  async openMenu(): Promise<void> {
    console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Login zurück.');

    await this.delay(1500);
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
  }
}

// Create Group Pop Up
@Component({
  selector: 'app-main-view-dialog',
  templateUrl: './main-view.component-dialog.html',
  styleUrls: ['./main-view.component-dialog.css']
})
export class MainViewComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<MainViewComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  createGroup(): void {
    console.log('Group ... was created');
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
