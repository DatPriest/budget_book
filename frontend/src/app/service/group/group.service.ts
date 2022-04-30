import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { NewExpensesModule } from 'src/app/model/new-expenses/new-expenses.module';
import { HistoryModule } from 'src/app/model/history/history.module';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public http: HttpClient) { }

  createGroup(user: GroupModule) {
    return this.http.post<GroupModule>('http://localhost:4000/api/v1/groups/create', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getGroupUsers(groupId: number) {
    return this.http.post<UserModule[]>('http://localhost:4000/api/v1/groups/getUsers/' + groupId, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  addNewIssues(newExpenses: NewExpensesModule) {
    return this.http.post<NewExpensesModule>('http://localhost:4000/api/v1/groups/addExpenses', JSON.stringify(newExpenses), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getHistory(groupId: number) {
    return this.http.post<HistoryModule[]>('http://localhost:4000/api/v1/groups/getHistory/' + groupId, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
