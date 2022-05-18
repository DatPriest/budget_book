import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { AlertService } from 'src/app/service/alert/alert.service';
import { NewExpensesModule } from 'src/app/model/new-expenses/new-expenses.module';
import { AppModule } from 'src/app/app.module';
import { CategorieModule } from 'src/app/model/categorie/categorie.module';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-new-expenses-view',
  templateUrl: './new-expenses-view.component.html',
  styleUrls: ['./new-expenses-view.component.css']
})
export class NewExpensesViewComponent implements OnInit {

  newExpensesForm: FormGroup;
  categorie$: Observable<CategorieModule[]> = of([]);
  constructor(public router: Router, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewExpensesViewComponent>,
    public groupService: GroupService, public alertService: AlertService, public app: AppModule) {
      this.categorie$ = this.groupService.getAllCategorieByGroupId(this.app.groupId)
    }

  createExpenses(newExpensesForm: NgForm): void {
    const newExpensesData = new NewExpensesModule(this.app.groupId, newExpensesForm.value.subject, newExpensesForm.value.amount, newExpensesForm.value.date);
    this.groupService.addNewExpenses(newExpensesData).subscribe(data => {
      this.groupService.getExpensesByGroupId(this.app.groupId);
      newExpensesForm.reset();
    })
  }

  closeExpenses(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.newExpensesForm = this.formBuilder.group({
      subject: [''],
      amount: [''],
      date: ['']
    });
  }

}
