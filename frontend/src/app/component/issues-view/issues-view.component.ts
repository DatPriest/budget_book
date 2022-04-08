import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issues } from 'src/app/model/Issues';

@Component({
  selector: 'app-issues-view',
  templateUrl: './issues-view.component.html',
  styleUrls: ['./issues-view.component.css']
})
export class IssuesViewComponent implements OnInit {
  issues: Issues[] = [];

  constructor(public router: Router) {
    this.issues.push(new Issues(1, 'Miete', '124,47', 'EUR', '02.04.2022'));
    this.issues.push(new Issues(2, 'Einkauf', '47,95', 'EUR', '05.04.2022'));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    this.router.navigate(['/issues/new']);
  }

  ngOnInit(): void {
  }

}
