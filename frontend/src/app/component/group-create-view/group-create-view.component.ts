import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-create-view',
  templateUrl: './group-create-view.component.html',
  styleUrls: ['./group-create-view.component.css']
})
export class GroupCreateViewComponent implements OnInit {

  constructor(public router: Router) { }

  back(): void {
    //this.router.navigate(['/main-menu']);
    this.router.navigate(['/group-new']);
  }

  create(): void {
    this.router.navigate(['/main-menu']);
    //this.router.navigate(['/group-new']);
  }

  ngOnInit(): void {
  }

}
