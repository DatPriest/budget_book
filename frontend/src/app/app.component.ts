import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from "@angular/forms";
import { Subject } from 'rxjs';
import { LoginService } from './service/login/login.service';
import { AlertService } from './service/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String;
  userActivity: any;
  userInactive: Subject<any> = new Subject();
  constructor(public router: Router, public translate: TranslateService, public loginService: LoginService, public alertService: AlertService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(localStorage.getItem('selectedLang') || translate.setDefaultLang(translate.getBrowserCultureLang()) || 'de');
    this.setTimeout();
    this.userInactive.subscribe(() => this.logOut());
  }

  logOut() {
    this.loginService.logOut();
    this.alertService.alert("Inaktivität", "automatische Abmeldung nach 10 Minuten.", "info");
    this.router.navigate(['/sign-in']);
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 600000); // 10 Minuten
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  public useLanguage(language: NgForm): void {
    this.translate.use(language.value.language);
    localStorage.setItem('selectedLang', language.value.language);
  }

  ngOnInit(): void { }
}
