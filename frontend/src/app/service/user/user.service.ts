import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NewPasswordModule } from 'src/app/model/new-password/new-password.module';
import { UserModule } from 'src/app/model/user/user.module';
import { LoginUserModule } from 'src/app/model/login-user/login-user.module';
import { SecurityQuestionModule } from 'src/app/model/security-question/security-question.module';
import { UpdatePasswordModule } from 'src/app/model/update-password/update-password.module';
import { NotificationModule } from 'src/app/model/notification/notification.module';
import { FaqModule } from 'src/app/model/faq/faq.module';
import { AskFaqModule } from 'src/app/model/ask-faq/ask-faq.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  registerUser(user: UserModule) {
    console.log(user);
    return this.http.post<UserModule>('http://localhost:4000/api/v1/verification/register', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  loginUser(user : object) {
    return this.http.post<LoginUserModule>('http://localhost:4000/api/v1/verification/login', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  passwordForgotRequest(user: NewPasswordModule) {
    return this.http.post<NewPasswordModule>('http://localhost:4000/api/v1/verification/forgotPassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getSecurityQuestion() {
    return this.http.get<SecurityQuestionModule[]>('http://localhost:4000/api/v1/securityQuestions', {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  getProfile(userId: number) {
    return this.http.get<UserModule[]>(`http://localhost:4000/api/v1/verification/getUserProfile/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  updateProfile(user: UserModule) {
    return this.http.put<UserModule>('http://localhost:4000/api/v1/verification/postUserProfile', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  updateUserPassword(user: UpdatePasswordModule) {
    return this.http.put<UpdatePasswordModule>('http://localhost:4000/api/v1/profile/updatePassword', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  deleteProfile(userId: number) {
    return this.http.delete(`http://localhost:4000/api/v1/profile/deleteUserProfile/${userId}`, {headers : new HttpHeaders() .append("Content-Type", "application/json")});
  }

  notificationEmail(user: NotificationModule) {
    return this.http.put('http://localhost:4000/api/v1/notification/email', JSON.stringify(user), {headers : new HttpHeaders() .append("Content-Type", "application/json")});
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
}
