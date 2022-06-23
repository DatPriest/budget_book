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
import { AlertService } from 'src/app/service/alert/alert.service';
import { UserService } from 'src/app/service/user/user.service';

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
  constructor(public router: Router, public dialog: MatDialog, public userService: UserService, public app: AppModule, public loginService: LoginService, public alertService: AlertService) {
    this.expenses$ = this.userService.getExpensesByUserId(parseInt(localStorage.getItem("userId")));
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

  download(): void {

  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
