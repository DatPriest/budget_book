import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-view',
  templateUrl: './privacy-view.component.html',
  styleUrls: ['./privacy-view.component.css']
})
export class PrivacyViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
