import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-detail-view',
  templateUrl: './group-detail-view.component.html',
  styleUrls: ['./group-detail-view.component.css']
})
export class GroupDetailViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/main-menu']);
  }

  history(): void {
    this.router.navigate(['/history']);
  }

  ausgaben(): void {
    this.router.navigate(['/ausgaben']);
  }

  ngOnInit(): void {
  }

}
