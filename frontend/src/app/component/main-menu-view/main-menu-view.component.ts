import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})
export class MainMenuViewComponent implements OnInit {

  groups: Group[] = [];
  constructor(public router: Router) {
    this.groups.push(new Group(1,"Teddybär Bande")),
    this.groups.push(new Group(2,"Rosenrot mit zwei Zeilen")),
    this.groups.push(new Group(3,"Rainbow Gang, mit einem Zeilenumbruch nur um zu gucken was passiert wenn der Text extrem lang ist. Ebenfalls will ich sehen was passiert wenn der Text länger als der Block ist, also über den Rand guckt."))
  }

  createGroup(): void {
    //this.router.navigate(['']);
  }

  openGroup(id: number, name: string): void {
    console.log('Loading Group...\n' + id + ' ' + name);
    alert(id + ' ' + name);
    //this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
