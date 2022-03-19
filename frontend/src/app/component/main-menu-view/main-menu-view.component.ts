import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})
export class MainMenuViewComponent implements OnInit {

  constructor(public router: Router) { }

  createGroup(): void {
    //this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
