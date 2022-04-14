import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-issues-view',
  templateUrl: './new-issues-view.component.html',
  styleUrls: ['./new-issues-view.component.css']
})
export class NewIssuesViewComponent implements OnInit {

  newIssuesForm: FormGroup;
  constructor(public router: Router, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewIssuesViewComponent>) { }

  closeIssues(): void {
    this.dialogRef.close();
  }

  createIssues(newIssuesForm: NgForm): void {
    console.log(newIssuesForm.value);
    newIssuesForm.reset();
  }

  ngOnInit(): void {
    this.newIssuesForm = this.formBuilder.group({
      subject: [''],
      amount: [''],
      date: ['']
    });
  }

}
