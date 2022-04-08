import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-issues-view',
  templateUrl: './new-issues-view.component.html',
  styleUrls: ['./new-issues-view.component.css']
})
export class NewIssuesViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/issues']);
  }

  ngOnInit(): void {
  }

}
