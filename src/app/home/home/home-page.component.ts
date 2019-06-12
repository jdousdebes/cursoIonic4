import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../auth/state/session.service';
import {SessionQuery} from '../../auth/state/session.query';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePage implements OnInit {

  user$ = this.sessionQuery.user$;

  constructor(
    private sessionQuery: SessionQuery,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

}
