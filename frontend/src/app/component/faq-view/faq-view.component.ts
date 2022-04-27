import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  constructor(public router: Router) { }

  backToMenu(): void {
    this.router.navigate(['main']);
  }

  ngOnInit(): void {
  }

}
