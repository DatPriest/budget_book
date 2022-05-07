import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(header: string, message: string, event: string): void {
    swal ( header ,  message ,  event );
  }

  successfulAlert(header: string, message: string, event: string, time: number): void {
    swal({
      title: header,
      text: message,
      icon: event,
      timer: time
    });
  }
}
