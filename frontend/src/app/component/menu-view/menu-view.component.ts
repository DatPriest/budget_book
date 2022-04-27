import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  constructor(public router: Router) { }

  moveToProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    if (confirm("Möchten Sie sich wirklich ausloggen?")) {
      this.router.navigate(['/sign-in']);
    }
  }

  openFAQ(): void {
    this.router.navigate(['/faq']);
  }

  openAGB(): void {
    this.router.navigate(['/gtc']);
  }

  openDatenschutz(): void {
    this.router.navigate(['/privacy']);
  }

  openImpressum(): void {
    this.router.navigate(['/imprint']);
  }

  openSprache(): void {
    //this.router.navigate(['/xxx']);
  }

  ngOnInit(): void {
  }

}
