import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { UserModule } from "../../model/user/user.module";
import { ExpensesModule } from "../../model/expenses/expenses.module";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(public http: HttpClient) {
  }

  getList(userId: number, groupId: number) {
      return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/statistics/getAllExpensesFromGroupUser/${userId}/${groupId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")});
  }

  async getUsername(userId: number) {
    let user: UserModule;
    user = await firstValueFrom(this.http.get<UserModule>(`http://localhost:4000/api/v1/user/id/1`, {headers: new HttpHeaders().append("Content-Type", "application/json")}));
    return user.firstName;
  }

  getListYear(userId: number, groupId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/statistics/getAllExpensesFromGroupUserFromThisYear/${userId}/${groupId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")});
  }

  getListMonth(userId: number, groupId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/statistics/getAllExpensesFromGroupUserFromThisMonth/${userId}/${groupId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")});
  }

  getListYearFromUser(userId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/statistics/GetAllExpensesPerYear/${userId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")});
  }

  getListMonthFromUser(userId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/statistics/GetAllExpensesPerMonth/${userId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")});

  }
}
