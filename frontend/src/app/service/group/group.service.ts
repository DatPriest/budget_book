import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { NewExpensesModule } from 'src/app/model/new-expenses/new-expenses.module';
import { HistoryModule } from 'src/app/model/history/history.module';
import { GroupInviteModule } from 'src/app/model/group-invite/group-invite.module';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public http: HttpClient) { }

  getGroupsByUser(userId: number) {
    return this.http.post<GroupModule[]>(`http://localhost:4000/api/v1/groups/getGroups/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  createGroup(user: GroupModule) {
    return this.http.post<GroupModule>('http://localhost:4000/api/v1/groups/create', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getUsersByGroup(groupId: number) {
    return this.http.post<UserModule[]>(`http://localhost:4000/api/v1/groups/getUsers/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getGroupById(groupId: number) {
    return this.http.get<GroupModule[]>(`http://localhost:4000/api/v1/groups/getGroupDetail/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  addNewExpenses(newExpenses: NewExpensesModule) {
    return this.http.post<NewExpensesModule>('http://localhost:4000/api/v1/groups/addExpenses', JSON.stringify(newExpenses), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getExpensesByGroupId(groupId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/groups/getExpenses/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  createInviteCode(groupId: number, inviteCode: string) {
    return this.http.post<GroupInviteModule>(`http://localhost:4000/api/v1/groups/create/inviteCode/${groupId}/${inviteCode}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  joinGroup(inviteCode: string) {
    return this.http.post<GroupInviteModule>(`http://localhost:4000/api/v1/groups/joinGroup/${inviteCode}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getHistory(groupId: number) {
    return this.http.get<HistoryModule[]>(`http://localhost:4000/api/v1/history/entries/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
