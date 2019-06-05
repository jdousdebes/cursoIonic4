import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SessionService } from '../../services/session.service';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../services/toast.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user$: Subject<any> = this.sessionService.user$;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private sessionService: SessionService,
    private storage: Storage,
    private toast: ToastService,
  ) {}

  async ngOnInit() {}

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

      this.sessionService.signin(params).subscribe(
        (response: any) => {
          if (response.user) {
            this.toast.show('¡Bienvenid@!');
          }
        },
        error => {
          console.log('error: ', error);
        },
      );
    } catch (e) {
      this.toast.show('Ocurrió un error. Por favor intenta de nuevo');
    }
  }

  // Esta funcion la usamos en dos partes, es código que se puede reutilizar (modularizar)
  // TODO: Hacer un componente de logout.
  logout() {
    this.alertController
      .create({
        header: 'Desloguearse',
        message: 'Seguro de qe quieres salir?',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.sessionService.logout();
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
          },
        ],
      })
      .then(alert => {
        alert.present();
      });
  }
}
