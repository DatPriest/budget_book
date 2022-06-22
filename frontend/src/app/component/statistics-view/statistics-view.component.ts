import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatisticsModule } from 'src/app/model/statistics/statistics.module';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';
import { PeriodViewComponent } from '../period-view/period-view.component';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css']
})
export class StatisticsViewComponent implements OnInit {

  user: StatisticsModule[] = [];
  constructor(public router: Router, public groupService: GroupService, public dialog: MatDialog, public loginService: LoginService) {
    this.user.push(new StatisticsModule(1, "Lisa", "150,58")),
    this.user.push(new StatisticsModule(2, "Max", "241")),
    this.user.push(new StatisticsModule(3, "Leon", "47"))
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  periodDialog(statisticType: string, user: StatisticsModule): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
      type: statisticType,
      member: user,
    };

    this.dialog.open(PeriodViewComponent, dialogConfig)
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
