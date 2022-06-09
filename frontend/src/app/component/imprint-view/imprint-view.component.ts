import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint-view',
  templateUrl: './imprint-view.component.html',
  styleUrls: ['./imprint-view.component.css']
})
export class ImprintViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['main']);
  }

  ngOnInit(): void {
  }

}
