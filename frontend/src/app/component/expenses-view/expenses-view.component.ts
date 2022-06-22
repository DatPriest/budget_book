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

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {

  searchTerm: string;
  expenses$: Observable<ExpensesModule[]> = of([]);
  user$ : Observable<UserModule[]> = of([]);
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule, public loginService: LoginService) {
    this.expenses$ = this.groupService.getExpensesByGroupId(parseInt(localStorage.getItem("groupId")));
    this.user$ = this.groupService.getUsersByGroup(parseInt(localStorage.getItem("groupId")));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewExpensesViewComponent, dialogConfig);
  }

  openPeriod(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(PeriodViewComponent, dialogConfig);
  }

  download(): void {
    
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }
}
