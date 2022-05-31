import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Observable, of} from "rxjs";
import { AppModule } from 'src/app/app.module';
import { CategoryModule } from 'src/app/model/category/category.module';
import { GroupService } from 'src/app/service/group/group.service';
import { NewCategoryViewComponent } from '../new-category-view/new-category-view.component';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  categorys$: Observable<CategoryModule[]> = of([]);
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule) {
    this.categorys$ = this.groupService.getAllCategoryByGroupId(this.app.groupId);
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewCategoryViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
