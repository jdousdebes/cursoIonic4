import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private sessionService: SessionService,
    private http: HttpClient,
  ) { }

  ngOnInit() { }

  async signin() {
    this.loading = true;
    try {
      await this.platform.ready();
      const payload = await this.googlePlus.login({
        webClientId: environment.googleplus.webClientId,
      });

      const params = new HttpParams().set('idToken', payload.idToken);
      this.sessionService
        .signin(params)
        .subscribe((response: any) => {
          if (response.user) {
            console.log('response: ', response.user);
          }
          // if (me) {
          //   this.navCtrl.navigateRoot(['/home']);
          // }
        }, (error) => console.log('error: ', error));
    } catch (e) {
      this.loading = false;
      console.error(e);
      // this.toast.error(this.translate.instant(
      //   'No pudimos obtener autorización de Google. Por favor intenta de nuevo.'
      // ));
    }
  }

}
