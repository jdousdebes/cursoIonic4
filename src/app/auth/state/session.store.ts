import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  user: any;
  loading: boolean;
}

export function createInitialState(): SessionState {
  return {
    token: null,
    user: null,
    loading: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }

  setLoading(loading: boolean = true) {
    return this.update(state => ({
      ...state,
      loading: loading,
    }));
  }
}
