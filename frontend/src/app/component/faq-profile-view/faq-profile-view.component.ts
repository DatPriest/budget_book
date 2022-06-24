import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { FaqModule } from 'src/app/model/faq/faq.module';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-faq-profile-view',
  templateUrl: './faq-profile-view.component.html',
  styleUrls: ['./faq-profile-view.component.css']
})
export class FaqProfileViewComponent implements OnInit {

  panelOpenState: boolean = false;
  questions$: Observable<FaqModule[]> = of([]);
  constructor(public router: Router, public userService: UserService, public app: AppModule, public loginService: LoginService) {
    this.questions$ = this.userService.getFaqQuestionByUserId(parseInt(localStorage.getItem("userId")));
  }

  back(): void {
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
