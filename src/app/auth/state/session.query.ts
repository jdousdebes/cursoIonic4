import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  user$ = this.store._select(state => state.user);

  constructor(protected store: SessionStore) {
    super(store);
  }
}
