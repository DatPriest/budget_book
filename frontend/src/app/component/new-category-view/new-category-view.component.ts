import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { NewCategoryModule } from 'src/app/model/new-category/new-category.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-new-category-view',
  templateUrl: './new-category-view.component.html',
  styleUrls: ['./new-category-view.component.css']
})
export class NewCategoryViewComponent implements OnInit {

  newCategoryForm: FormGroup;
  constructor(public router: Router, public formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewCategoryViewComponent>,
    public groupService: GroupService, public alertService: AlertService, public app: AppModule) { }

  createCategory(newCategoryForm: NgForm): void {
    const newCategoryData = new NewCategoryModule(this.app.groupId, newCategoryForm.value.category);
    this.groupService.createCategory(newCategoryData).subscribe(data => {
      this.groupService.getAllCategoryByGroupId(this.app.groupId);
      newCategoryForm.reset();
    })
  }

  closeCategory(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.newCategoryForm = this.formBuilder.group({
      category: ['']
    });
  }

}
