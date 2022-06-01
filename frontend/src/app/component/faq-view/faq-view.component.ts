import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    this.router.navigate(['main']);
  }

  askQuestion(): void {
    this.router.navigate(['ask-question']);
  }

  ngOnInit(): void {
  }

}
