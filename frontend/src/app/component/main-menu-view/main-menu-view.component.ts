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
    this.groups.push(new Group(2,"Rosenrot")),
    this.groups.push(new Group(3,"Rainbow Gang"))
  }

  createGroup(): void {
    //this.router.navigate(['']);
  }

  openGroup(id: number, name: string): void {
    console.log(id + ' ' + name);
    //this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
