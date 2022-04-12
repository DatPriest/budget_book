import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*public http: HttpClient*/) { }

  registerUser(user: User) {
    //return this.http.post<User>('localhost:4000/api/v1/veryfication/register', user, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
