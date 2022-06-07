import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewExpensesViewComponent } from '../new-expenses-view/new-expenses-view.component';
import { Observable, of } from 'rxjs';
import { GroupService } from 'src/app/service/group/group.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {

  searchTerm: string;
  expenses: ExpensesModule[] = [];
  expenses$: Observable<ExpensesModule[]> = of([]);
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule) {
    //this.expenses$ = this.groupService.getExpensesByGroupId(this.app.groupId);
    this.expenses.push(new ExpensesModule(1, 'Miete', '124,47', '02.04.2022'));
    this.expenses.push(new ExpensesModule(1, 'Einkauf', '47,95', '05.04.2022'));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewExpensesViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }
}
