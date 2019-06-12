import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStore } from './session.store';
import { environment } from '../../../environments/environment';
import { finalize, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient, private storage: Storage) {}

  signin(idToken: string) {
    this.sessionStore.setLoading(true);
    return this.http
      .post(environment.api + 'signin', {
        idToken: idToken,
      })
      .pipe(
        tap(async (data: any) => {
          await this.storage.set('token', data.token);
          this.sessionStore.update({
            token: data.token,
            user: data.user,
          });
        }),
        finalize(() => this.sessionStore.setLoading(false)),
      );
  }

  async check() {
    this.sessionStore.setLoading(true);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (await this.storage.get('token')),
    });
    this.http
      .get(environment.api + 'me', { headers })
      .pipe(finalize(() => this.sessionStore.setLoading(false)))
      .subscribe((response: any) => {
        this.sessionStore.update({
          user: response.data,
        });
      });
  }

  async logout() {
    await this.storage.remove('token');
    this.sessionStore.update({
      token: null,
      user: null,
    });
  }
}
