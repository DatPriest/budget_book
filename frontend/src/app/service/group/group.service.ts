import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupModule } from 'src/app/model/group/group.module';
import { UserModule } from 'src/app/model/user/user.module';

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

  addNewIssues(newIssues: NewIssues) {
    return this.http.post<NewIssues>('http://localhost:4000/api/v1/groups/addIssues', JSON.stringify(newIssues), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getHistory(groupId: number) {
    return this.http.get
  }
}
