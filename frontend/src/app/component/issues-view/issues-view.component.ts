import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-view',
  templateUrl: './issues-view.component.html',
  styleUrls: ['./issues-view.component.css']
})
export class IssuesViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    this.router.navigate(['/issues/new']);
  }

  ngOnInit(): void {
  }

}
