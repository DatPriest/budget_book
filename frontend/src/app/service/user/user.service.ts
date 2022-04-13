import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import {LoginUser} from "../../model/LoginUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<User>('http://localhost:4000/api/v1/verification/register', user, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  loginUser(user: LoginUser) {
    console.log("Folgender User wurde übergeben");
    console.log(JSON.stringify(user));
    return this.http.post<User>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
