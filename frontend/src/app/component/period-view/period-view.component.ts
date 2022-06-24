import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {AppModule} from 'src/app/app.module';
import {PeriodModule} from 'src/app/model/period/period.module';
import {AlertService} from 'src/app/service/alert/alert.service';
import {LoginService} from 'src/app/service/login/login.service';
import {ExpensesViewComponent} from "../expenses-view/expenses-view.component";
import {Router} from "@angular/router";
import {ExpensesModule} from "../../model/expenses/expenses.module";

@Component({
  selector: 'app-period-view',
  templateUrl: './period-view.component.html',
  styleUrls: ['./period-view.component.css']
})
export class PeriodViewComponent implements OnInit {

  periodForm: FormGroup;
  id: number;

  constructor(public dialogRef: MatDialogRef<PeriodViewComponent>, public formBuilder: FormBuilder, public alertService: AlertService, public app: AppModule, public loginService: LoginService, public translate: TranslateService, private router : Router) {
  }

  editperiod(periodForm: NgForm): void {
      localStorage.setItem("periodFilter", periodForm.value.period);
      window.location.reload();
      this.dialogRef.close(periodForm.value.period);
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }


  // downloadFile(data: any) {
  //   const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  //   const header = Object.keys(data[0]);
  //   const csv = data.map((row) =>
  //     header
  //       .map((fieldName) => JSON.stringify(row[fieldName], replacer))
  //       .join(',')
  //   );
  //   csv.unshift(header.join(','));
  //   const csvArray = csv.join('\r\n');
  //
  //   const a = document.createElement('a');
  //   const blob = new Blob([csvArray], { type: 'text/csv' });
  //   const url = window.URL.createObjectURL(blob);
  //
  //   a.href = url;
  //   a.download = 'myFile.csv';
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  //   a.remove();
  // }
}
