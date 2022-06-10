import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-question-view',
  templateUrl: './ask-question-view.component.html',
  styleUrls: ['./ask-question-view.component.css']
})
export class AskQuestionViewComponent implements OnInit {

  constructor(public router: Router) { }

  addQuestion(askForm: NgForm): void {

  }

  back(): void {
    this.router.navigate(['/faq']);
  }

  ngOnInit(): void {
  }

}
