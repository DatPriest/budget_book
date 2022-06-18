import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-privacy-view',
  templateUrl: './privacy-view.component.html',
  styleUrls: ['./privacy-view.component.css']
})
export class PrivacyViewComponent implements OnInit {

  constructor(public router: Router, public loginService: LoginService) { }

  back(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
