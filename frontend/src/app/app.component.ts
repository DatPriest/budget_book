import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from "@angular/forms";
import { Subject } from 'rxjs';
import { LoginService } from './service/login/login.service';
import { AlertService } from './service/alert/alert.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String;
  userActivity: any;
  userInactive: Subject<any> = new Subject();
  constructor(public router: Router, public translate: TranslateService, public loginService: LoginService, public alertService: AlertService, public dialogRef: MatDialog) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(localStorage.getItem('selectedLang') || translate.setDefaultLang(translate.getBrowserCultureLang()) || 'de');
    this.setTimeout();
    this.userInactive.subscribe(() => this.logOut());
    localStorage.setItem("newPassword", "false");
  }

  logOut() {
    this.loginService.logOut();
    this.dialogRef.closeAll();
    this.router.navigate(['/sign-in']);
    this.alertService.alert(this.translate.instant('alert.appComponent.header'), this.translate.instant('alert.appComponent.message'), "info");
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
