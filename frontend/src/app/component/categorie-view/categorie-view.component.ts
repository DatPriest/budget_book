import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {
  categories$: Observable<String[]> = of([]);
  constructor(public router: Router) { }

  backToMenuTemp(): void {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
  }

}
