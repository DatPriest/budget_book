import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-expenses-view',
  templateUrl: './new-expenses-view.component.html',
  styleUrls: ['./new-expenses-view.component.css']
})
export class NewExpensesViewComponent implements OnInit {

  newExpensesForm: FormGroup;
  constructor(public router: Router, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewExpensesViewComponent>) { }

  closeExpenses(): void {
    this.dialogRef.close();
  }

  createExpenses(newExpensesForm: NgForm): void {
    console.log(newExpensesForm.value);
    newExpensesForm.reset();
  }

  ngOnInit(): void {
    this.newExpensesForm = this.formBuilder.group({
      subject: [''],
      amount: [''],
      date: ['']
    });
  }

}
