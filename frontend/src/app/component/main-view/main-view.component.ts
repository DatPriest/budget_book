import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupModule } from 'src/app/model/group/group.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupViewComponent } from '../create-group-view/create-group-view.component';
import { GroupService } from 'src/app/service/group/group.service';
import {firstValueFrom, Observable, of} from 'rxjs';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  userGroups$ : Observable<GroupModule[]> = of([]);
  image: string;
  groupAddPosition: number = 0;
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule) {

    this.loadGroups(parseInt(localStorage.getItem("userId")));
  }

  createGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(CreateGroupViewComponent, dialogConfig);
  }

  openGroup(groupId: number): void {
    this.groupService.getGroupById(groupId).subscribe(data => this.router.navigate(['/group', data]));
  }

  async loadGroups(userId:number){
    let groupList: GroupModule[] = [];
    let result:any = await firstValueFrom(this.groupService.getGroupsByUser(userId));
    groupList = result.groups;
    this.userGroups$ = of(this.sortForView(groupList));
    this.groupAddPosition = groupList.length + 1;
  }

  private sortForView(groupModuleList:GroupModule[]):GroupModule[]{
    let sortedListForView: GroupModule[] = [];
    groupModuleList.forEach(g =>{
      g.viewPosition = sortedListForView.length+1;
      sortedListForView.push(g);
    });
    return sortedListForView;
  }

  ngOnInit(): void {
  }
}
