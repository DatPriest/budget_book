import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  groups: Group[] = [];
  picture: string | undefined; // Image File
  groupname: string | undefined;

  constructor(public router: Router, public dialog: MatDialog) {
    this.groups.push(new Group(1,"Gruppe 1")),
    this.groups.push(new Group(2,"Gruppe 2")),
    this.groups.push(new Group(3,"Gruppe 3"))
  }

  createGroupDialog(): void {
    const dialogRef = this.dialog.open(MainViewComponentDialog);
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

// Create Group Dialog
@Component({
  selector: 'app-main-view-dialog',
  templateUrl: './main-view.component-dialog.html',
  styleUrls: ['./main-view.component-dialog.css']
})
export class MainViewComponentDialog {

  groupDialogForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<MainViewComponentDialog>,
    private formBuilder: FormBuilder) {}

  createGroup(groupDialogForm: NgForm): void {
    console.log('Group ' + groupDialogForm.value.name + ' was created');
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.groupDialogForm = this.formBuilder.group({
      picture: '',
      groupname: ''
    });
  }
}
