import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ExpensesModule} from 'src/app/model/expenses/expenses.module';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NewExpensesViewComponent} from '../new-expenses-view/new-expenses-view.component';
import {firstValueFrom, Observable, of} from 'rxjs';
import {GroupService} from 'src/app/service/group/group.service';
import {AppModule} from 'src/app/app.module';
import {LoginService} from 'src/app/service/login/login.service';
import {PeriodViewComponent} from '../period-view/period-view.component';
import {UserModule} from 'src/app/model/user/user.module';
import {FormGroup, NgForm} from '@angular/forms';
import {AlertService} from 'src/app/service/alert/alert.service';
import {StatisticService} from "../../service/statistic/statistic.service";

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {

  searchTerm: string;
  expenses$: Observable<ExpensesModule[]> = of([]);
  user$: Observable<UserModule[]> = of([]);
  userId: number = -1;
  expensesForm: FormGroup;
  timePeriod: any;
  expensesShow: any[] = [];
  groupId: number = -1;
  static periodFilter: String;

  constructor(public stats: StatisticService, public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule, public loginService: LoginService, public alertService: AlertService) {
   this.reloadList(this.userId)
    this.user$ = this.groupService.getUsersByGroup(parseInt(localStorage.getItem("groupId")));
  }

  getUserId(expensesForm: NgForm): void {
    if (expensesForm.value.user == '') {
      this.userId = -1;
    } else {
      this.userId = expensesForm.value.user;
    }
    console.warn(this.userId);
  }

  delete(expenseId: number): void {
    this.groupService.deleteExpensesById(expenseId);
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewExpensesViewComponent, dialogConfig).beforeClosed().subscribe(result => {
      if (result == true) {
        window.location.reload();
      }
    });
  }

  openPeriod(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(PeriodViewComponent, dialogConfig).beforeClosed().subscribe(result => {
      this.timePeriod = result;
    })
  }

  download(): void {
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

  reloadList(userId: number) {
    this.userId = userId;
    console.log("group: " + parseInt(localStorage.getItem("groupId")) + "userid: " + userId)
    this.expenses$ = this.returnApiCall()
  }

  returnApiCall() {
    switch (localStorage.getItem("periodFilter")) {
      case "month":
        if (this.userId == -1) {
          return this.groupService.getExpensesByGroupIdMonth(parseInt(localStorage.getItem("groupId")));
        } else {
          return this.stats.getListMonth(this.userId, parseInt(localStorage.getItem("groupId")))
        }

      case "year":
        if (this.userId == -1) {
          return this.groupService.getExpensesByGroupIdYear(parseInt(localStorage.getItem("groupId")));
        } else {
          return this.stats.getListYear(this.userId, parseInt(localStorage.getItem("groupId")))
        }

      case "all":
        if (this.userId == -1) {
          return this.groupService.getExpensesByGroupId(parseInt(localStorage.getItem("groupId")));
        } else {
          return this.stats.getList(this.userId, parseInt(localStorage.getItem("groupId")))
        }

      default :
        if (this.userId == -1) {
          return this.groupService.getExpensesByGroupId(parseInt(localStorage.getItem("groupId")));
        } else {
          return this.stats.getList(this.userId, parseInt(localStorage.getItem("groupId")))
        }
    }
  }
}
