import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { LoginService } from 'src/app/service/login/login.service';
import { AlertService } from 'src/app/service/alert/alert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {
  languageForm: FormGroup
  appComp: AppComponent;
  constructor(public router: Router, public translate: TranslateService, public formBuilder : FormBuilder, public loginService: LoginService, public alertService: AlertService, public dialogRef: MatDialogRef<LanguageViewComponent>, public dialogRef2: MatDialog) {
    this.appComp = new AppComponent(router, translate, loginService, alertService, dialogRef2);
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
    this.languageForm = this.formBuilder.group({
      language: ['']
    });
  }
}
