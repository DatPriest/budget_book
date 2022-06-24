import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppModule } from 'src/app/app.module';
import swal from 'sweetalert';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public router: Router, public userService: UserService, public app: AppModule, public translate: TranslateService) { }

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
      title: this.translate.instant('alert.logout.title'),
      text: this.translate.instant('alert.logout.text'),
      icon: "warning",
      buttons: [this.translate.instant('alert.cancel'), "OK"],
      dangerMode: true,
    })
    .then((willLogOut) => {
      if (willLogOut) {
        swal(this.translate.instant('alert.logout.message'), {
          icon: "success",
        });
        this.router.navigate(['/sign-in']);
      }
    })
  }

  deleteAccountAlert(): void {
    swal({
      title: this.translate.instant('alert.delete.title'),
      text: this.translate.instant('alert.delete.text'),
      icon: "warning",
      buttons: [this.translate.instant('alert.cancel'), "OK"], //cancel
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.userService.deleteProfile(parseInt(localStorage.getItem("userId")));
        swal(this.translate.instant('alert.delete.message'), {
          icon: "success",
        });
        this.userService.deleteProfile(parseInt(localStorage.getItem("userId"))).subscribe(() => {
          this.router.navigate(['/sign-up']);
        })
      }
    })
  }
}
