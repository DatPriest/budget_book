import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css']
})
export class CurrencyViewComponent implements OnInit {
  constructor(public loginService: LoginService, public dialogRef: MatDialogRef<CurrencyViewComponent>) {
    
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
