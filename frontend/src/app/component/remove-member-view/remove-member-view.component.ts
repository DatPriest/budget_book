import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-remove-member-view',
  templateUrl: './remove-member-view.component.html',
  styleUrls: ['./remove-member-view.component.css']
})
export class RemoveMemberViewComponent implements OnInit {

  constructor(public loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
