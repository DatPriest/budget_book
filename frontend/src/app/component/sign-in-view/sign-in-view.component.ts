import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgToastService } from 'ng-angular-popup';
import {UserService} from "../../service/user/user.service";
import {LoginUser} from "../../model/LoginUser";

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  showPassword: boolean = false;
  service: UserService | undefined;
  private user!: LoginUser;
  constructor(public router: Router, private toast: NgToastService) {
    //alert('Bitte die Seite nicht übersetzen lassen falls dies angeboten wird!'); Stört etwas
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Macht eine Abfrage aus der Datenbbank, ob Benutzername existiert, und ob das dazugehörige Passwort richtig ist.
   * Und führt dann den Login-Vorgang aus.
   * Falls Benutzername oder Passwort falsch sind, wird eine Fehlermeldung ausgegeben.
   * @param email Die Emailadresse, die auf der Website eingegeben wurde
   * @param pw Das Passwortm, dass auf der Website eingegeben wurde
   */
  loginUser(email: string, pw: string): void {
    this.router.navigate(['main']);
    // TODO: Abfrage aus Datenbank
  //   this.user = new LoginUser(email, pw);
  // if (this.service?.loginUser(this.user)){
  //   this.router.navigate(['main']);
  //   console.log("User eingeloggt")
  // }
  // else {
  //   console.warn('Diese Funktion ist kein Bestandteil des aktuellen Sprintes!\n Leitet temporär zum Hauptmenü zurück.');
  // }

  }

  newUser(): void {
    this.router.navigate(['sign-up']);
  }

  newPassword(): void {
    this.router.navigate(['new-password']);
  }

  ngOnInit(): void {
  }
}
