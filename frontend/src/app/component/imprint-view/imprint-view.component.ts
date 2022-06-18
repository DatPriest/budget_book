import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-imprint-view',
  templateUrl: './imprint-view.component.html',
  styleUrls: ['./imprint-view.component.css']
})
export class ImprintViewComponent implements OnInit {

  constructor(public router: Router, public loginService: LoginService) { }

  back(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
