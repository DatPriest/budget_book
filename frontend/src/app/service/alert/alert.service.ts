import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import swal from 'sweetalert';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public router: Router, public userService: UserService, public app: AppModule) { }

  alert(header: string, message: string, event: string): void {
    swal (header,  message,  event);
  }

  successfulAlert(header: string, message: string, event: string, time: number): void {
    swal({
      title: header,
      text: message,
      icon: event,
      timer: time
    });
  }

  logOutAlert(): void {
    swal({
      title: "Abmelden",
      text: "Möchtest Du Dich wirklich abmelden?",
      icon: "warning",
      buttons: ["Cancel", "OK"],
      dangerMode: true,
    })
    .then((willLogOut) => {
      if (willLogOut) {
        swal("Du wurdest erfolgreich abgemeldet!", {
          icon: "success",
        });
        this.router.navigate(['/sign-in']);
      }
    })
  }

  deleteAccountAlert(): void {
    swal({
      title: "Bist Du Dir sicher?",
      text: "Einmal gelöscht, kann der Account nicht mehr wiederhergestellt werden!",
      icon: "warning",
      buttons: ["Cancel", "OK"],
      dangerMode: true,
    })
    .then((willLogOut) => {
      if (willLogOut) {
        this.userService.deleteProfile(this.app.userId);
        swal("Der Account wurde erfolgreich gelöscht!", {
          icon: "success",
        });
      }
      this.router.navigate(['/sign-in']);
    })
  }
}
