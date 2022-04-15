import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateGroup } from 'src/app/model/CreateGroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public http: HttpClient) { }

  createGroup(user: CreateGroup) {
    return this.http.post<CreateGroup>('http://localhost:4000/api/v1/groups/create', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
