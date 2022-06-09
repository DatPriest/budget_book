import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {
  languageForm: FormGroup
  appComp: AppComponent;
  constructor(public router: Router, public translate: TranslateService, public formBuilder : FormBuilder) {
    this.appComp = new AppComponent(router, translate)
  }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      language: ['']
    });
  }
}
