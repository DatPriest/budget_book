import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ausgaben-view',
  templateUrl: './ausgaben-view.component.html',
  styleUrls: ['./ausgaben-view.component.css']
})
export class AusgabenViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/group-detail']);
  }

  add(): void {
    this.router.navigate(['/ausgaben-add']);
  }

  ngOnInit(): void {
  }

}
