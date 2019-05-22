import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {pluck, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) { }

  signin(params: HttpParams) {
    return this.http
      .get(environment.api + 'signin/', {params})
      .pipe(
          tap(async (token: string) => {
            console.log('token1: ', token);
            await this.storage.set('token', token);
            // this.sessionStore.update(({
            //   token: token,
            // }));
          }),
        );
  }
}
