import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

  constructor(public router: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(localStorage.getItem('selectedLang') || translate.setDefaultLang(translate.getBrowserCultureLang()) || 'de');
  }

  public useLanguage(language: NgForm): void {
    this.translate.use(language.value.language);
    localStorage.setItem('selectedLang', language.value.language);
  }

  ngOnInit(): void {
    this.router.navigate(['/sign-in']);
  }
}
