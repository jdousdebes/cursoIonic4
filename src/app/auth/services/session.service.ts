import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  user$: Subject<any> = new Subject();

  constructor(private http: HttpClient, private storage: Storage) {}

  signin(params: any) {
    return this.http.post(environment.api + 'signin', params).pipe(
      tap(async (data: any) => {
        await this.storage.set('token', data.token);
        this.user$.next(data.user);
      }),
    );
  }

  async check() {
    this.http.get(environment.api + 'me').subscribe((response: any) => {
      this.user$.next(response.data);
    });
  }

  async logout() {
    await this.storage.remove('token');
    this.user$.next(null);
  }
}
