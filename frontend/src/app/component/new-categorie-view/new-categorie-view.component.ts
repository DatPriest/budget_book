import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { NewCategorieModule } from 'src/app/model/new-categorie/new-categorie.module';
import { AlertService } from 'src/app/service/alert/alert.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-new-categorie-view',
  templateUrl: './new-categorie-view.component.html',
  styleUrls: ['./new-categorie-view.component.css']
})
export class NewCategorieViewComponent implements OnInit {

  newCategorieForm: FormGroup;
  constructor(public router: Router, public formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewCategorieViewComponent>,
    public groupService: GroupService, public alertService: AlertService, public app: AppModule) { }

  createCategorie(newCategorieForm: NgForm): void {
    const newCategorieData = new NewCategorieModule(this.app.groupId, newCategorieForm.value.categorie);
    this.groupService.createCategorie(newCategorieData).subscribe(data => {
      this.groupService.getAllCategorieByGroupId(this.app.groupId);
      newCategorieForm.reset();
    })
  }

  closeCategorie(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.newCategorieForm = this.formBuilder.group({
      categorie: ['']
    });
  }

}
