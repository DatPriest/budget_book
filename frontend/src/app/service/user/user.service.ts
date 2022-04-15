import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPasswordRequest } from 'src/app/model/NewPasswordRequest';
import { NewPasswordVerification } from 'src/app/model/NewPasswortVerification';
import { User } from 'src/app/model/User';
import { LoginUser } from "../../model/LoginUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<User>('http://localhost:4000/api/v1/verification/register', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  loginUser(user: LoginUser) {
    return this.http.post<LoginUser>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  passwordForgotRequest(user: NewPasswordRequest) {
    return this.http.post<NewPasswordRequest>('http://localhost:4000/api/v1/verification/forgotPassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  passwordForgotVerification(user: NewPasswordVerification) {
    return this.http.post<NewPasswordVerification>('http://localhost:4000/api/v1/verification/updatePassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
