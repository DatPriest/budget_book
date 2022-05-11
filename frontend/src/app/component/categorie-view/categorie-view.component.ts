import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  constructor(public router: Router) { }

  backToMenuTemp(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
