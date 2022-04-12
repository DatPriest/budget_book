import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-issues-view',
  templateUrl: './new-issues-view.component.html',
  styleUrls: ['./new-issues-view.component.css']
})
export class NewIssuesViewComponent implements OnInit {

  index: number = 1;

  constructor(public router: Router) {
    this.index;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  back(): void {
    this.router.navigate(['/issues']);
  }

  add(): void {
   this.index++;
  }

  async save(): Promise<void> {
    await this.delay(1500);
    this.router.navigate(['/issues']);
  }

  ngOnInit(): void {
  }

}