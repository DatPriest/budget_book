import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Group } from 'src/app/model/Group';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})
export class MainMenuViewComponent implements OnInit {
  groups: Group[] = [];
  constructor(public router: Router, private groupService: GroupService) {
    this.groups.push(new Group(1,"Teddybär Bande")),
    this.groups.push(new Group(2,"Rosenrot")),
    this.groups.push(new Group(3,"Rainbow Gang"))
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async createGroup(): Promise<void> {
    await this.delay(5000);
    //this.router.navigate(['']);
  }

  openGroup(id: number, name: string): void {
    console.log('Loading Group...\n' + id + ' ' + name);
    //this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
