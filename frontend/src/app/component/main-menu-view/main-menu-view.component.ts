import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';
import { GroupService } from 'src/app/service/group/group.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  groupname: string;
}

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})
export class MainMenuViewComponent implements OnInit {
  groups: Group[] = [];
  groupname: string | undefined;

  constructor(public router: Router, private groupService: GroupService, public dialog: MatDialog) {
    this.groups.push(new Group(1,"Teddybär Bande")),
    this.groups.push(new Group(2,"Rosenrot")),
    this.groups.push(new Group(3,"Rainbow Gang"))
  }

  createGroupDialog(): void {
    const dialogRef = this.dialog.open(MainMenuViewComponentDialog, {
      //width: '250px',
      data: {groupname: this.groupname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.groupname = result;
    });
  }

  openGroup(id: number, name: string): void {
    console.log('Loading Group...\n' + id + ' ' + name);
    this.router.navigate(['/group-detail']);
  }

  openMenu(): void {
    console.error('Das Menü hat aktuell keine Funktion!');
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-main-menu-view-dialog',
  templateUrl: './main-menu-view.component-dialog.html',
  styleUrls: ['./main-menu-view.component-dialog.css']
})
export class MainMenuViewComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<MainMenuViewComponentDialog>,
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
