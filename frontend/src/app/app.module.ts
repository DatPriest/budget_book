import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { PasswordForgottenViewComponent } from './password-forgotten-view/password-forgotten-view.component';
import { MainMenuViewComponent } from './main-menu-view/main-menu-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    PasswordForgottenViewComponent,
    MainMenuViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component: LoginViewComponent},
      {path: 'register',component: RegisterViewComponent},
      {path: 'password-forgotten',component: PasswordForgottenViewComponent},
      {path: 'main-menu',component: MainMenuViewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
