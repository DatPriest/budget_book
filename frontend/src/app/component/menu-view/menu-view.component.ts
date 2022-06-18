import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { CurrencyViewComponent } from '../currency-view/currency-view.component';
import { LanguageViewComponent } from '../language-view/language-view.component';
import { NotificationViewComponent } from '../notification-view/notification-view.component';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  constructor(public router: Router, public userService: UserService, public app: AppModule, public alertService: AlertService,
    public dialog: MatDialog, public loginService: LoginService) { }

  moveToProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.alertService.logOutAlert();
    this.loginService.logOut();
  }

  openFAQ(): void {
    this.router.navigate(['/faq']);
  }

  openAGB(): void {
    this.router.navigate(['/gtc']);
  }

  openDatenschutz(): void {
    this.router.navigate(['/privacy']);
  }

  openImpressum(): void {
    this.router.navigate(['/imprint']);
  }

  notificationDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(NotificationViewComponent, dialogConfig)
  }

  currencyDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(CurrencyViewComponent, dialogConfig)
  }

  languageDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    this.dialog.open(LanguageViewComponent, dialogConfig)
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }
}
