import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GroupModule } from 'src/app/model/group/group.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateGroupViewComponent } from '../create-group-view/create-group-view.component';
import { GroupService } from 'src/app/service/group/group.service';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { CreateInviteViewComponent } from '../create-invite-view/create-invite-view.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  //userGroups$ : Observable<GroupModule[]> = of([]);
  image: string;
  groups: GroupModule[] = []
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule) {
    //this.getGroupsByUserId();
    this.groups.push(new GroupModule(1, 'Test', this.image));
  }

  getGroupsByUserId(): void {
    this.groupService.getGroupsByUser(this.app.userId);
  }

  createGroupDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(CreateGroupViewComponent, dialogConfig);
  }

  openGroup(groupId: number): void {
    this.router.navigate(['/group'])
    //this.groupService.getGroupById(groupId).subscribe(data => this.router.navigate(['/group', data]));
  }

  ngOnInit(): void {
  }
}
