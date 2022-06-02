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
    //this.questions$ = this.userService.getFaqQuestion();
    this.fragen.push(new FaqModule("Warum ist die Banane krumm?", "Weil Du dumm bist?"));
    this.fragen.push(new FaqModule("Was kann ich machen wenn ich blond bin?", "Schonmal versucht sich die Haare abzuschneiden?"));
  }

  back(): void {
    this.router.navigate(['main']);
  }

  askQuestion(): void {
    this.router.navigate(['ask-question']);
  }

  ngOnInit(): void {
  }

}
