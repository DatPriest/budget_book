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
import { ExpensesViewComponent } from './component/expenses-view/expenses-view.component';
import { NewExpensesViewComponent } from './component/new-expenses-view/new-expenses-view.component'
import { HistoryViewComponent } from './component/history-view/history-view.component';
import { CreateGroupViewComponent } from './component/create-group-view/create-group-view.component';
import { MenuViewComponent } from './component/menu-view/menu-view.component';
import { ProfileViewComponent } from './component/profile-view/profile-view.component';
import { EditProfileViewComponent } from './component/edit-profile-view/edit-profile-view.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInViewComponent,
    SignUpViewComponent,
    NewPasswordViewComponent,
    MainViewComponent,
    GroupViewComponent,
    ExpensesViewComponent,
    NewExpensesViewComponent,
    HistoryViewComponent,
    CreateGroupViewComponent,
    MenuViewComponent,
    ProfileViewComponent,
    EditProfileViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sign-in',component: SignInViewComponent},             // sign-In
      {path: 'sign-up',component: SignUpViewComponent},             // register
      {path: 'new-password',component: NewPasswordViewComponent},   // password-forgotten
      {path: 'main',component: MainViewComponent},                  // main-menu
      {path: 'group',component: GroupViewComponent},                // group-detail
      {path: 'history',component: HistoryViewComponent},            // history
      {path: 'expenses',component: ExpensesViewComponent},             // ausgaben
      {path: 'profile', component: ProfileViewComponent},
      {path: 'profile/edit', component: EditProfileViewComponent}
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
export class AppModule {
  userId: number = 0;
  groupId: number = 0;
}
