import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gtc-view',
  templateUrl: './gtc-view.component.html',
  styleUrls: ['./gtc-view.component.css']
})
export class GtcViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['main']);
  }

  ngOnInit(): void {
  }

}
