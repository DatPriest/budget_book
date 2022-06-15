import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModule } from 'src/app/app.module';
import { PeriodModule } from 'src/app/model/period/period.module';
import { AlertService } from 'src/app/service/alert/alert.service';

@Component({
  selector: 'app-period-view',
  templateUrl: './period-view.component.html',
  styleUrls: ['./period-view.component.css']
})
export class PeriodViewComponent implements OnInit {

  periodForm: FormGroup;
  id: number;
  constructor(public dialogRef: MatDialogRef<PeriodViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder, public alertService: AlertService, public app: AppModule) { }

  editperiod(periodForm: NgForm): void {
    if (periodForm.value.period == '') {
      this.alertService.alert("Oops",  "Bitte wähle einen Zeitraum aus!",  "error");
     } else {
     if (this.data.type == "User") {
       this.id = this.data.member.id;
     } else {
       this.id = parseInt(localStorage.getItem("groupId"));
     }
      const periodData = new PeriodModule(this.id, this.data.type, periodForm.value.period);
    }
  }

  ngOnInit(): void {
    this.periodForm = this.formBuilder.group({
      period: ['']
    });
  }

}
