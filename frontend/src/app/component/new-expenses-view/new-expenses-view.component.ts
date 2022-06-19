import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/service/group/group.service';
import { AlertService } from 'src/app/service/alert/alert.service';
import { NewExpensesModule } from 'src/app/model/new-expenses/new-expenses.module';
import { AppModule } from 'src/app/app.module';
import { CategoryModule } from 'src/app/model/category/category.module';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-new-expenses-view',
  templateUrl: './new-expenses-view.component.html',
  styleUrls: ['./new-expenses-view.component.css']
})
export class NewExpensesViewComponent implements OnInit {

  newExpensesForm: FormGroup;
  category$: Observable<CategoryModule[]> = of([]);
  constructor(public router: Router, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<NewExpensesViewComponent>, public groupService: GroupService, public alertService: AlertService, public app: AppModule, public loginService: LoginService) {
    this.category$ = this.groupService.getAllCategoryByGroupId(parseInt(localStorage.getItem("groupId")));
  }

  createExpenses(newExpensesForm: NgForm): void {
    const newExpensesData = new NewExpensesModule(parseInt(localStorage.getItem("groupId")), newExpensesForm.value.subject, newExpensesForm.value.amount, newExpensesForm.value.date);
    console.warn(newExpensesData);
    /*
    this.groupService.addNewExpenses(newExpensesData).subscribe(data => {
      newExpensesForm.reset();
    })*/
  }

  closeExpenses(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
