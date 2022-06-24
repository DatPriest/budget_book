import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppModule } from 'src/app/app.module';
import { AskFaqModule } from 'src/app/model/ask-faq/ask-faq.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-ask-question-view',
  templateUrl: './ask-question-view.component.html',
  styleUrls: ['./ask-question-view.component.css']
})
export class AskQuestionViewComponent implements OnInit {

  askForm: FormGroup;
  constructor(public router: Router, public app: AppModule, public formBuilder: FormBuilder, public userService: UserService, public alertService: AlertService, public loginService: LoginService, public translate: TranslateService) {

  }

  addQuestion(askForm: NgForm): void {
    if (askForm.value.question != '') {
      const askData = new AskFaqModule(parseInt(localStorage.getItem("userId")), askForm.value.question);
      this.userService.postQuestion(askData).subscribe(data => {
        this.alertService.successfulAlert(this.translate.instant('alert.ask.header'), this.translate.instant('alert.ask.message'), "success", 2500);
        this.router.navigate(['/faq']);
      })
    }
  }

  back(): void {
    this.router.navigate(['/faq']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
