import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPassword } from 'src/app/model/NewPassword';
import { User } from 'src/app/model/User';
import { LoginUser } from "../../model/LoginUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly testUser = new LoginUser("test@mail.com", "12345");

  constructor(public http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<User>('http://localhost:4000/api/v1/verification/register', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  loginUser(user: LoginUser) {
    //return this.http.post<LoginUser>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
    return this.testUser;
  }

  passwordForgot(user: NewPassword) {
    return this.http.post<NewPassword>('http://localhost:4000/api/v1/verification/forgotPassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
