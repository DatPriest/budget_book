import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from 'src/app/model/Group';
import { NewIssues } from 'src/app/model/NewIssues';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public http: HttpClient) { }

  createGroup(user: Group) {
    return this.http.post<Group>('http://localhost:4000/api/v1/groups/create', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getGroupUsers(groupId: number) {
    return this.http.post<User[]>('http://localhost:4000/api/v1/groups/getUsers/' + groupId, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  addNewIssues(newIssues: NewIssues) {
    return this.http.post<NewIssues>('http://localhost:4000/api/v1/groups/addIssues', JSON.stringify(newIssues), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getHistory(groupId: number) {
    return this.http.get
  }
}
