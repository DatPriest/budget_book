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
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { LanguageViewComponent } from './component/language-view/language-view.component';
import { EditGroupViewComponent } from './component/edit-group-view/edit-group-view.component';
import { RemoveMemberViewComponent } from './component/remove-member-view/remove-member-view.component';
import { PeriodViewComponent } from './component/period-view/period-view.component';
import { SpecificExpensesViewComponent } from './component/specific-expenses-view/specific-expenses-view.component';
import { StatisticsViewComponent } from './component/statistics-view/statistics-view.component';
import { DiagramViewComponent } from './component/diagram-view/diagram-view.component';

import { HistoryFilterPipe } from './component/history-view/history-filter.pipe';
import { ExpensesFilterPipe } from './component/expenses-view/expenses-filter.pipe';

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
    CreateInviteViewComponent,
    LanguageViewComponent,
    EditGroupViewComponent,
    RemoveMemberViewComponent,
    PeriodViewComponent,
    SpecificExpensesViewComponent,
    StatisticsViewComponent,
    DiagramViewComponent,
    HistoryFilterPipe,
    ExpensesFilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AngularMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // Login
      {path: 'sign-in',component: SignInViewComponent},
      {path: 'sign-up',component: SignUpViewComponent},
      {path: 'new-password',component: NewPasswordViewComponent},

      // Main
      {path: 'main',component: MainViewComponent},

      // Menu
      {path: 'faq', component: FaqViewComponent},
      {path: 'faq/ask-question', component: AskQuestionViewComponent},
      {path: 'gtc', component: GtcViewComponent},
      {path: 'privacy', component: PrivacyViewComponent},
      {path: 'imprint', component: ImprintViewComponent},

      // Profile
      {path: 'profile', component: ProfileViewComponent},
      {path: 'profile/edit', component: EditProfileViewComponent},
      {path: 'profile/edit-passwort', component: EditPasswordViewComponent},

      // Group
      {path: 'group',component: GroupViewComponent},
      {path: 'group/history',component: HistoryViewComponent},
      {path: 'group/expenses',component: ExpensesViewComponent},
      {path: 'group/expenses/specific', component: SpecificExpensesViewComponent},
      {path: 'group/category', component: CategoryViewComponent},
      {path: 'group/statistics', component: StatisticsViewComponent},
      {path: 'group/diagram', component: DiagramViewComponent},

      // Any
      { path: '',   redirectTo: '/sign-in', pathMatch: 'full'},
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
