import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { LoginService } from 'src/app/service/login/login.service';
import { PeriodViewComponent } from '../period-view/period-view.component';
import { AlertService } from 'src/app/service/alert/alert.service';
import { UserService } from 'src/app/service/user/user.service';
import {StatisticService} from "../../service/statistic/statistic.service";

@Component({
  selector: 'app-expenses-profile-view',
  templateUrl: './expenses-profile-view.component.html',
  styleUrls: ['./expenses-profile-view.component.css']
})
export class ExpensesProfileViewComponent implements OnInit {

  searchTerm: string;
  expenses$: Observable<ExpensesModule[]> = of([]);
  userId: number;
  timePeriod: any;
  constructor(public stats : StatisticService, public router: Router, public dialog: MatDialog, public userService: UserService, public app: AppModule, public loginService: LoginService, public alertService: AlertService) {
    this.reloadList();
  }

  back(): void {
    this.router.navigate(['/profile']);
  }

  openPeriod(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(PeriodViewComponent, dialogConfig).beforeClosed().subscribe(result => {
      this.timePeriod = result;
    })
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

  reloadList() {
    this.expenses$ = this.returnApiCall()
  }

  returnApiCall() {
    switch (localStorage.getItem("periodFilter")) {
      case "month":
          return this.stats.getListMonthFromUser(parseInt(localStorage.getItem("userId")))

      case "year":
          return this.stats.getListYearFromUser(parseInt(localStorage.getItem("userId")))

      case "all":
        return this.userService.getExpensesByUserId(parseInt(localStorage.getItem("userId")));

      default :
        return this.userService.getExpensesByUserId(parseInt(localStorage.getItem("userId")));
    }
  }

}
