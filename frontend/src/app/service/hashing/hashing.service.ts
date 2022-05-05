import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class HashingService {


  constructor() {
  }

  /**
   * Hasht den übergebenen String mit MD5 und gibt diesen Hash wieder Zurück
   * @param str Der String der Gehasht werden soll
   */
  encrypt(str:string):string{
    return Md5.hashStr(str);
  }
}
