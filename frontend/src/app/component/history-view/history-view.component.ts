import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { HistoryModule } from 'src/app/model/history/history.module';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {
  
  history$ : Observable<HistoryModule[]> = of([]);
  constructor(public router: Router, public groupService: GroupService, public app: AppModule) {
    this.history$ = this.groupService.getHistory(this.app.groupId);
  }

  back(): void {
    this.router.navigate(['/group']);
  }

  ngOnInit(): void {
  }

}
