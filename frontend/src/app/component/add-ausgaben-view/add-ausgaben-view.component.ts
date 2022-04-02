import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ausgaben-view',
  templateUrl: './add-ausgaben-view.component.html',
  styleUrls: ['./add-ausgaben-view.component.css']
})
export class AddAusgabenViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['/ausgaben']);
  }

  ngOnInit(): void {
  }

}
