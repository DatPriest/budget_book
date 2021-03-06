import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { NewPasswordModule } from 'src/app/model/new-password/new-password.module';
import { UserModule } from 'src/app/model/user/user.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { UpdatePasswordModule } from 'src/app/model/update-password/update-password.module';
import { FaqModule } from 'src/app/model/faq/faq.module';
import { AskFaqModule } from 'src/app/model/ask-faq/ask-faq.module';
import { UserProfileModule } from 'src/app/model/user-profile/user-profile.module';
import { ExpensesModule } from 'src/app/model/expenses/expenses.module';
import { UserEmailModule } from 'src/app/model/user-email/user-email.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registerUser(user: UserModule) {
    return this.http.post<UserModule>('http://localhost:4000/api/v1/verification/register', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  loginUser(user : object) {
    return this.http.post<LoginUserModule>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  passwordForgotRequest(user: NewPasswordModule) {
    return this.http.post<NewPasswordModule>('http://localhost:4000/api/v1/verification/forgotPassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getUserIdByEmail(email: string) {
    return this.http.get<UserEmailModule>(`http://localhost:4000/api/v1/user/byEmail/${email}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getSecurityQuestion() {
    return this.http.get<SecurityQuestionModule[]>('http://localhost:4000/api/v1/securityQuestions', {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getSecurityQuestionByUserId(userId: number): Observable<SecurityQuestionModule> {
    return this.http.get<SecurityQuestionModule>(`http://localhost:4000/api/v1/securityQuestions/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  async getProfile(userId: number) {
    return await firstValueFrom(this.http.get<UserProfileModule>(`http://localhost:4000/api/v1/user/id/${userId}`, {headers: new HttpHeaders().append("Content-Type", "application/json")}));
  }

  updateProfile(user: UserProfileModule) {
    return this.http.put<UserProfileModule>('http://localhost:4000/api/v1/user/update', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  updateUserPassword(user: UpdatePasswordModule) {
    return this.http.put<UpdatePasswordModule>('http://localhost:4000/api/v1/user/updatePassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  deleteProfile(userId: number) {
    return this.http.delete(`http://localhost:4000/api/v1/user/delete/id/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getFaqQuestion() {
    return this.http.get<FaqModule[]>('http://localhost:4000/api/v1/faq/getAllWithAnswers', {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getFaqQuestionByUserId(userId: number) {
    return this.http.get<FaqModule[]>(`http://localhost:4000/api/v1/faq/getAllFromUser/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  postQuestion(user: AskFaqModule) {
    return this.http.post<AskFaqModule>('http://localhost:4000/api/v1/faq/create', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getExpensesByUserId(userId: number) {
    return this.http.get<ExpensesModule[]>(`http://localhost:4000/api/v1/expenses/user/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }
}
