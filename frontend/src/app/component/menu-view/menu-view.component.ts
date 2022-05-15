import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  constructor(public router: Router, public userService: UserService, public app: AppModule, public alertService: AlertService) { }

  moveToProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.alertService.logOutAlert();
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

  moveToKategorie(): void {
    this.router.navigate(['/categorie']);
  }

  ngOnInit(): void {
  }
}
