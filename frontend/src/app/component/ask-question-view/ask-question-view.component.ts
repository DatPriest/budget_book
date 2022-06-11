import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AskFaqModule } from 'src/app/model/ask-faq/ask-faq.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-ask-question-view',
  templateUrl: './ask-question-view.component.html',
  styleUrls: ['./ask-question-view.component.css']
})
export class AskQuestionViewComponent implements OnInit {

  askForm: FormGroup;
  constructor(public router: Router, public app: AppModule, public formBuilder: FormBuilder, public userService: UserService,
    public alertService: AlertService) { }

  addQuestion(askForm: NgForm): void {
    if (askForm.value.question != '') {
      const askData = new AskFaqModule(this.app.userId, askForm.value.question);
      this.userService.postQuestion(askData).subscribe(data => {
        this.alertService.successfulAlert("Frage erfolgreich gestellt!", "", "success", 2500);
        this.router.navigate(['/faq']);
      })
    }
  }

  back(): void {
    this.router.navigate(['/faq']);
  }

  ngOnInit(): void {
    this.askForm = this.formBuilder.group({
      question: ['TEST'],
    });
  }

}
