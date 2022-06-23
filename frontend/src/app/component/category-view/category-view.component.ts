import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from "rxjs";
import { AppModule } from 'src/app/app.module';
import { CategoryModule } from 'src/app/model/category/category.module';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';
import { NewCategoryViewComponent } from '../new-category-view/new-category-view.component';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  categorys$: Observable<CategoryModule[]> = of([]);
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule, public loginService: LoginService) {
    this.categorys$ = this.groupService.getAllCategoryByGroupId(parseInt(localStorage.getItem("groupId")));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewCategoryViewComponent, dialogConfig);
  }

  delete(categoryId: number): void {
    this.groupService.deleteCategoryById(categoryId).subscribe(data =>{
      console.info(data);
    })
    this.reloadCurrentPage();
  }
  private reloadCurrentPage() {
    window. location. reload();
  }
  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
