import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-gtc-view',
  templateUrl: './gtc-view.component.html',
  styleUrls: ['./gtc-view.component.css']
})
export class GtcViewComponent implements OnInit {

  constructor(public router: Router, public loginService: LoginService) {
    
  }

  back(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
