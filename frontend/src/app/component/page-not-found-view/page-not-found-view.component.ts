import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found-view',
  templateUrl: './page-not-found-view.component.html',
  styleUrls: ['./page-not-found-view.component.css']
})
export class PageNotFoundViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
