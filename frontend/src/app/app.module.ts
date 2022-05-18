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
import { EditProfileViewComponent } from './component/edit-profile-view/edit-profile-view.component';
import { GtcViewComponent } from './component/gtc-view/gtc-view.component';
import { FaqViewComponent } from './component/faq-view/faq-view.component';
import { PrivacyViewComponent } from './component/privacy-view/privacy-view.component';
import { ImprintViewComponent } from './component/imprint-view/imprint-view.component';
import { AskQuestionViewComponent } from './component/ask-question-view/ask-question-view.component';
import { EditPasswordViewComponent } from './component/edit-password-view/edit-password-view.component';
import { CategoryViewComponent } from './component/category-view/category-view.component';
import { NewCategoryViewComponent } from './component/new-category-view/new-category-view.component';
import { InviteViewComponent } from './component/invite-view/invite-view.component';
import { CreateInviteViewComponent } from './component/create-invite-view/create-invite-view.component';

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
    EditProfileViewComponent,
    GtcViewComponent,
    FaqViewComponent,
    PrivacyViewComponent,
    ImprintViewComponent,
    AskQuestionViewComponent,
    EditPasswordViewComponent,
    CategoryViewComponent,
    NewCategoryViewComponent,
    InviteViewComponent,
    CreateInviteViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'sign-in',component: SignInViewComponent},
      {path: 'sign-up',component: SignUpViewComponent},
      {path: 'new-password',component: NewPasswordViewComponent},
      {path: 'main',component: MainViewComponent},
      {path: 'group',component: GroupViewComponent},
      {path: 'history',component: HistoryViewComponent},
      {path: 'expenses',component: ExpensesViewComponent},
      {path: 'profile', component: ProfileViewComponent},
      {path: 'profile/edit', component: EditProfileViewComponent},
      {path: 'faq', component: FaqViewComponent},                  // FAQ
      {path: 'ask-question', component: AskQuestionViewComponent},  // Frage stellen
      {path: 'gtc', component: GtcViewComponent},                  // AGB´s
      {path: 'privacy', component: PrivacyViewComponent},          // Datenschutz
      {path: 'imprint', component: ImprintViewComponent},          // Impressum
      {path: 'category', component: CategoryViewComponent},       // Kategorien
      {path: 'edit-passwort', component: EditPasswordViewComponent} // Edit Passwort im Profil
    ]),
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
