import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewExpensesViewComponent } from '../new-expenses-view/new-expenses-view.component';
import { Observable, of } from 'rxjs';
import { GroupService } from 'src/app/service/group/group.service';
import { AppModule } from 'src/app/app.module';
import { LoginService } from 'src/app/service/login/login.service';
import { PeriodViewComponent } from '../period-view/period-view.component';
import { UserModule } from 'src/app/model/user/user.module';
import { FormGroup, NgForm } from '@angular/forms';
import { AlertService } from 'src/app/service/alert/alert.service';

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {

  searchTerm: string;
  expenses$: Observable<ExpensesModule[]> = of([]);
  user$ : Observable<UserModule[]> = of([]);
  userId: number;
  expensesForm: FormGroup;
  timePeriod: any;
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule, public loginService: LoginService, public alertService: AlertService) {
    this.expenses$ = this.groupService.getExpensesByGroupId(parseInt(localStorage.getItem("groupId")));
    this.user$ = this.groupService.getUsersByGroup(parseInt(localStorage.getItem("groupId")));
  }

  getUserId(expensesForm: NgForm): void {
    this.userId = expensesForm.value.user;
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
}
