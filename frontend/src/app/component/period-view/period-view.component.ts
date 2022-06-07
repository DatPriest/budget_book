import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-period-view',
  templateUrl: './period-view.component.html',
  styleUrls: ['./period-view.component.css']
})
export class PeriodViewComponent implements OnInit {

  periodForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<PeriodViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder: FormBuilder) { }

  editperiod(periodForm: NgForm): void {
    if (periodForm.value.period == '') {
      console.error("LEER");
    } else {
      
    }
  }

  ngOnInit(): void {
    this.periodForm = this.formBuilder.group({
      period: ['']
    });
  }

}
