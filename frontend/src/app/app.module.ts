import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginViewComponent } from './component/login-view/login-view.component';
import { RegisterViewComponent } from './component/register-view/register-view.component';
import { PasswordForgottenViewComponent } from './component/password-forgotten-view/password-forgotten-view.component';
import { MainMenuViewComponent } from './component/main-menu-view/main-menu-view.component';
import { NgToastModule } from 'ng-angular-popup';
import { GroupDetailViewComponent } from './component/group-detail-view/group-detail-view.component';
import { GroupCreateViewComponent } from './component/group-create-view/group-create-view.component';
import { AusgabenViewComponent } from './component/ausgaben-view/ausgaben-view.component';
import { AddAusgabenViewComponent } from './component/add-ausgaben-view/add-ausgaben-view.component';
import { HistoryViewComponent } from './component/history-view/history-view.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    PasswordForgottenViewComponent,
    MainMenuViewComponent,
    GroupDetailViewComponent,
    GroupCreateViewComponent,
    AusgabenViewComponent,
    AddAusgabenViewComponent,
    HistoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component: LoginViewComponent},
      {path: 'register',component: RegisterViewComponent},
      {path: 'password-forgotten',component: PasswordForgottenViewComponent},
      {path: 'main-menu',component: MainMenuViewComponent},
      {path: 'group-new',component: GroupCreateViewComponent},
      {path: 'group-detail',component: GroupDetailViewComponent},
      {path: 'history',component: HistoryViewComponent},
      {path: 'ausgaben',component: AusgabenViewComponent},
      {path: 'ausgaben-add',component: AddAusgabenViewComponent}
    ]),
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
