import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupModule } from 'src/app/model/group/group.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupViewComponent } from '../create-group-view/create-group-view.component';
import { GroupService } from 'src/app/service/group/group.service';
import {firstValueFrom, Observable, of} from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  userGroups$ : Observable<GroupModule[]> = of([]);
  image: string;
  groupAddPosition: number = 0;
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule, public loginService: LoginService) {
    this.loadGroups(parseInt(localStorage.getItem("userId")));
  }

  createGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(CreateGroupViewComponent, dialogConfig);
  }

  openGroup(groupId: number): void {
    localStorage.setItem("groupId", groupId.toString());
    this.router.navigate(['/group']);
  }

  async loadGroups(userId:number){
    let groupList: GroupModule[] = [];
    try{
      let result:any = await firstValueFrom(this.groupService.getGroupsByUser(userId));
      groupList = result.groups;
    } catch(Exception){
      //If groups is empty, exception is catcht here
    }
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
    this.loginService.checkLogIn();
  }
}
