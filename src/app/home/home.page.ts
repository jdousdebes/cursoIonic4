import { Component } from '@angular/core';
import { SessionService } from '../auth/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private sessionService: SessionService) {

  }
}
