import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NewPasswordRequestModule } from 'src/app/model/new-password-request/new-password-request.module';
import { NewPasswordVerificationModule } from 'src/app/model/new-password-verification/new-password-verification.module';
import { UserModule } from 'src/app/model/user/user.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registerUser(user: UserModule) {
    return this.http.post<UserModule>('http://localhost:4000/api/v1/verification/register', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")
  }).pipe(catchError(this.handleError<UserModule>("Email already exists or Password is empty or too short")));
  }

  loginUser(user: LoginUserModule) {
    return this.http.post<LoginUserModule>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")
    }).pipe(catchError(this.handleError<LoginUserModule>("User not found or bad password")));
  }

  passwordForgotRequest(user: NewPasswordRequestModule) {
    return this.http.post<NewPasswordRequestModule>('http://localhost:4000/api/v1/verification/forgotPassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  passwordForgotVerification(user: NewPasswordVerificationModule) {
    return this.http.put<NewPasswordVerificationModule>('http://localhost:4000/api/v1/verification/updatePassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  /*getSecurityQuestion(question: SecurityQuestionModule) {
    //let headers = new Headers();
    return this.http.get<SecurityQuestionModule[]>('http://localhost:4000/api/v1/verification/securityQuestion', JSON.stringify(question), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }*/

  public handleError<T>(origin = "origin", result? : T) {
    return (error: any) : Observable<T> => {
      throw new Error(`${origin}`);
    }
  }
}
