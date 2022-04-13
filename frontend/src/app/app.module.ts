import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from "@angular/common/http";

import { SignInViewComponent } from './component/sign-in-view/sign-in-view.component';
import { SignUpViewComponent } from './component/sign-up-view/sign-up-view.component';
import { NewPasswordViewComponent } from './component/new-password-view/new-password-view.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import { GroupViewComponent } from './component/group-view/group-view.component';
import { IssuesViewComponent } from './component/issues-view/issues-view.component';
import { NewIssuesViewComponent } from './component/new-issues-view/new-issues-view.component'
import { HistoryViewComponent } from './component/history-view/history-view.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInViewComponent,
    SignUpViewComponent,
    NewPasswordViewComponent,
    MainViewComponent,
    GroupViewComponent,
    IssuesViewComponent,
    NewIssuesViewComponent,
    HistoryViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sign-in',component: SignInViewComponent},             // ''
      {path: 'sign-up',component: SignUpViewComponent},             // register
      {path: 'new-password',component: NewPasswordViewComponent},   // password-forgotten
      {path: 'main',component: MainViewComponent},                  // main-menu
      {path: 'group',component: GroupViewComponent},                // group-detail
      {path: 'history',component: HistoryViewComponent},            // history
      {path: 'issues',component: IssuesViewComponent},              // ausgaben
      {path: 'issues/new',component: NewIssuesViewComponent}        // ausgaben-add
    ]),
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
