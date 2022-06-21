import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatisticsModule } from 'src/app/model/statistics/statistics.module';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';
import { PeriodViewComponent } from '../period-view/period-view.component';
import {StatisticService} from 'src/app/service/statistic/statistic.service';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css']
})
export class StatisticsViewComponent implements OnInit {

  map: Map<number, number>;
  constructor(public stats : StatisticService,public router: Router, public groupService: GroupService, public dialog: MatDialog, public loginService: LoginService) {
    this.getList();
  }

  private async getList() {
    this.map = new Map<number, number>()
    this.stats.getList(1,2022).then(value => this.map = value);
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

  getUsername(userId: number) {
    let name : String;
    this.stats.getUsername(userId).then(value => name = value);
    return name;
  }
}
