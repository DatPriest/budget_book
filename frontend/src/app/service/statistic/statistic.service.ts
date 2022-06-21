import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SecurityQuestionModule} from "../../model/security-question/security-question.module";
import {StatisticsModule} from "../../model/statistics/statistics.module";
import {firstValueFrom, Observable} from "rxjs";
import {UserModule} from "../../model/user/user.module";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(public http: HttpClient) { }

  async getList(userId: number, year: number) {
    let list: StatisticsModule[] = [];
    let map: Map<number, number> = new Map<number, number>();
    list = await firstValueFrom(this.http.get<StatisticsModule[]>(`http://localhost:4000/api/v1/statistics/GetAllExpensesPerYearFromGroup/${userId}/${year}`, {headers: new HttpHeaders().append("Content-Type", "application/json")}));
    console.log("liste durchgehen")
    list.forEach(value => {
      console.debug(map.has(value.userId))
      if (!map.has(value.userId)) {
        map.set(value.userId, value.amount);
        console.debug("Wert hinzugefügt "+ value.amount)
      } else {
        let temp: number = map.get(value.userId);
        map.set(value.userId, (temp + value.amount));
        console.debug("Wert vergrösert um: " + value.amount)
      }
    })
    console.debug(map)
    return map;
  }

  async getUsername(userId: number) {
    let user: UserModule;
    user = await firstValueFrom(this.http.get<UserModule>(`http://localhost:4000/api/v1/user/id/1`, {headers: new HttpHeaders().append("Content-Type", "application/json")}));
    return user.firstName;
  }
}
