import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { HistoryModule } from 'src/app/model/history/history.module';
import { GroupService } from 'src/app/service/group/group.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {

  searchTerm: string;
  history$ : Observable<HistoryModule[]> = of([]);
  //historys: HistoryModule[] = [];
  constructor(public router: Router, public groupService: GroupService, public app: AppModule, public loginService: LoginService) {
    this.history$ = this.groupService.getHistory(parseInt(localStorage.getItem("groupId")));
    //this.historys.push(new HistoryModule(1, "Test"));
    //this.historys.push(new HistoryModule(1, "Baum"));
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  ngOnInit(): void {
    this.loginService.checkLogIn();
  }

}
