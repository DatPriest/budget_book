import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Observable, of} from "rxjs";
import { AppModule } from 'src/app/app.module';
import { CategorieModule } from 'src/app/model/categorie/categorie.module';
import { GroupService } from 'src/app/service/group/group.service';
import { NewCategorieViewComponent } from '../new-categorie-view/new-categorie-view.component';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  categories$: Observable<CategorieModule[]> = of([]);
  constructor(public router: Router, public dialog: MatDialog, public groupService: GroupService, public app: AppModule) {
    this.categories$ = this.groupService.getAllCategorieByGroupId(this.app.groupId);
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NewCategorieViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
