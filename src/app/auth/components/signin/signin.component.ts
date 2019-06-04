import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SessionService} from '../../services/session.service';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  user: any = null;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private sessionService: SessionService,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    const token = await this.storage.get('token');
    this.user = token ? token.user : null;
  }

  async signin() {
    try {
      await this.platform.ready();
      const payload = await this.googlePlus.login({
        webClientId: environment.googleplus.webClientId,
      });

      // Forma 1.
      const params = new HttpParams().set('idToken', payload.idToken);

      // // Forma 2.
      // const params = {
      //   'idToken': payload.idToken,
      // };

      this.sessionService
        .signin(params)
        .subscribe(
          (response: any) => {
          if (response.user) {
            this.user = response.user;
            console.log('response: ', this.user);
          }
        },
          (error) => {
            console.log('error: ', error);
          });
    } catch (e) {
      console.error('error: ', e);
      // this.toast.error(this.translate.instant(
      //   'No pudimos obtener autorización de Google. Por favor intenta de nuevo.'
      // ));
    }
  }

}