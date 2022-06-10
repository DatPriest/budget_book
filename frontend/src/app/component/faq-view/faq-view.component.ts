import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FaqModule } from 'src/app/model/faq/faq.module';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  panelOpenState = false;
  fragen: FaqModule[] = []
  questions$: Observable<FaqModule[]> = of([]);
  constructor(public router: Router, public userService: UserService) {
    this.questions$ = this.userService.getFaqQuestion();
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
