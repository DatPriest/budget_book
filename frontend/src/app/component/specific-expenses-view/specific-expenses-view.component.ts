import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-specific-expenses-view',
  templateUrl: './specific-expenses-view.component.html',
  styleUrls: ['./specific-expenses-view.component.css']
})
export class SpecificExpensesViewComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
