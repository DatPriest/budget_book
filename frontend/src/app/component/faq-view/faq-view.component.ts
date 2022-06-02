import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaqModule } from 'src/app/model/fqa/faq.module';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  panelOpenState = false;
  fragen: FaqModule[] = []
  constructor(public router: Router) {
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
