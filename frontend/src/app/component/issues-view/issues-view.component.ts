import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issues } from 'src/app/model/Issues';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewIssuesViewComponent } from '../new-issues-view/new-issues-view.component';

@Component({
  selector: 'app-issues-view',
  templateUrl: './issues-view.component.html',
  styleUrls: ['./issues-view.component.css']
})
export class IssuesViewComponent implements OnInit {
  issues: Issues[] = [];

  constructor(public router: Router, public dialog: MatDialog) {
    // Wenn mehr Datensätze vorhanden sind, werden die Zeilen auch kleiner.
    this.issues.push(new Issues('Miete', '124,47', '02.04.2022'));
    this.issues.push(new Issues('Einkauf', '47,95', '05.04.2022'));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  add(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewIssuesViewComponent, dialogConfig);
  }

  ngOnInit(): void {
  }
}
