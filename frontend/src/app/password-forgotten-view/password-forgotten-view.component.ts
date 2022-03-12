import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-forgotten-view',
  templateUrl: './password-forgotten-view.component.html',
  styleUrls: ['./password-forgotten-view.component.css']
})
export class PasswordForgottenViewComponent implements OnInit {

  constructor(public router: Router) { }

  savePassword(): void {
    //this.router.navigate(['']);
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
