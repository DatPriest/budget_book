import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';
import { NewExpensesModule } from 'src/app/model/new-expenses/new-expenses.module';
import { HistoryModule } from 'src/app/model/history/history.module';
import { GroupInviteModule } from 'src/app/model/group-invite/group-invite.module';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { CategoryModule } from 'src/app/model/category/category.module';
import { catchError, Observable } from 'rxjs';
import { EditGroupModule } from 'src/app/model/edit-group/edit-group.module';
import {GroupList} from "../../model/group/GroupList";
import { NewCategoryModule } from 'src/app/model/new-category/new-category.module';
import { JoinGroupModule } from 'src/app/model/join-group/join-group.module';
import {GetGroupModel} from "../../model/group/GetGroupModel";
import { AlertService } from '../alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public http: HttpClient, public alertService: AlertService, public translate: TranslateService) { }

  getGroupsByUser(userId: number): Observable<GroupList> {
    return this.http.get<GroupList>(`http://localhost:4000/api/v1/groups/getGroups/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  createGroup(group: GroupModule, userId: number) {
    return this.http.post<GroupModule>(`http://localhost:4000/api/v1/groups/create/${userId}`, JSON.stringify(group), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  editGroup(group: EditGroupModule) {
    return this.http.put<EditGroupModule>('http://localhost:4000/api/v1/groups/update', JSON.stringify(group), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getUsersByGroup(groupId: number) {
    return this.http.get<UserModule[]>(`http://localhost:4000/api/v1/groups/getUsers/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getGroupById(groupId: number): Observable<GetGroupModel> {
    return this.http.get<GetGroupModel>(`http://localhost:4000/api/v1/groups/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getExpensesByGroupId(groupId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/expenses/group/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  addNewExpenses(newExpenses: NewExpensesModule) {
    return this.http.post<NewExpensesModule>('http://localhost:4000/api/v1/expenses/expense', JSON.stringify(newExpenses), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  deleteExpensesById(expenseId: number) {
    return this.http.delete(`http://localhost:4000/api/v1/expenses/expense/${expenseId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")
    }).subscribe(
      err => window.location.reload(),
      () => window.location.reload());
  }

  getInviteCode(groupId: number) : Observable<GroupInviteModule> {
    return this.http.get<GroupInviteModule>(`http://localhost:4000/api/v1/groups/create/inviteCode/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  requestGroup(inviteCode: string) {
    return this.http.get(`http://localhost:4000/api/v1/groups/getGroupIdForInviteCode/${inviteCode}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  joinGroup(join: JoinGroupModule) {
    return this.http.post<NewExpensesModule>('http://localhost:4000/api/v1/groups/addUserToGroup', JSON.stringify(join), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  deleteUser(userId: number, groupId: number) {
    return this.http.delete(`http://localhost:4000/api/v1/groups/removeUser/user/${userId}&group/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getHistory(groupId: number) {
    return this.http.get<HistoryModule[]>(`http://localhost:4000/api/v1/history/entries/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  createCategory(newCategory: NewCategoryModule) {
    return this.http.post<NewCategoryModule>('http://localhost:4000/api/v1/categories/category', JSON.stringify(newCategory), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getAllCategoryByGroupId(groupId: number) {
    return this.http.get<CategoryModule[]>(`http://localhost:4000/api/v1/categories/categories/${groupId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  deleteCategoryById(categoryId: number) {
    return this.http.delete(`http://localhost:4000/api/v1/categories/category/${categoryId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

}

/*
.subscribe(
    res => this.alertService.successfulAlert(this.translate.instant('alert.notDelete.header'), this.translate.instant('alert.notDelete.message'), "error", 2500),
    err => console.log('LOL' + err), //ohne Ausgabe & Mitt
    () => console.log('TEST'));
*/
