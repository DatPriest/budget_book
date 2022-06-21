import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-diagram-view',
  templateUrl: './diagram-view.component.html',
  styleUrls: ['./diagram-view.component.css']
})
export class DiagramViewComponent implements OnInit {

  constructor(public loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
