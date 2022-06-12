import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { FaqModule } from 'src/app/model/faq/faq.module';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  onlyMyQuestion: boolean = false;
  panelOpenState: boolean = false;
  fragen: FaqModule[] = []
  questions$: Observable<FaqModule[]> = of([]);
  constructor(public router: Router, public userService: UserService, public app: AppModule) {
    this.questions$ = this.userService.getFaqQuestion();
    console.warn(this.app.userId);
  }

  toggleQuestion(): void {
    this.onlyMyQuestion = !this.onlyMyQuestion;
    this.changeView(this.onlyMyQuestion);
  }

  changeView(onlyMy: boolean): void {
    console.error(onlyMy);
    if (onlyMy = false) {
      this.questions$ = this.userService.getFaqQuestion();
    } else {
      this.questions$ = this.userService.getFaqQuestionByUserId(this.app.userId);
    }
  }

  back(): void {
    this.router.navigate(['/main']);
  }

  askQuestion(): void {
    this.router.navigate(['/faq/ask-question']);
  }

  ngOnInit(): void {
  }

}
