import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewExpensesViewComponent } from '../new-expenses-view/new-expenses-view.component';

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {
  expenses: ExpensesModule[] = [];

  constructor(public router: Router, public dialog: MatDialog) {
    // Wenn mehr Datensätze vorhanden sind, werden die Zeilen auch kleiner.
    this.expenses.push(new ExpensesModule('Miete', '124,47', '02.04.2022'));
    this.expenses.push(new ExpensesModule('Einkauf', '47,95', '05.04.2022'));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewExpensesViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }
}
