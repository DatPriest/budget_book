import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-period-view',
  templateUrl: './period-view.component.html',
  styleUrls: ['./period-view.component.css']
})
export class PeriodViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PeriodViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.warn(data.member);
  }

  ngOnInit(): void {
  }

}
