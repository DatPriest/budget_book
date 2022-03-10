import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(public router: Router) { }

  newBenutzer(): void {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }
}
