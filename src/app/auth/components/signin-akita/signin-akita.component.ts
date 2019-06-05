import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../shared/services/toast.service';
import { environment } from '../../../../environments/environment';
import { SessionQuery } from '../../state/session.query';
import { SessionService } from '../../state/session.service';

@Component({
  selector: 'app-signin-akita',
  templateUrl: './signin-akita.component.html',
  styleUrls: ['./signin-akita.component.scss'],
})
export class SigninAkitaComponent implements OnInit {
  user$ = this.sessionQuery.user$;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private storage: Storage,
    private toast: ToastService,
    private sessionQuery: SessionQuery,
    private sessionService: SessionService,
  ) {}

  async ngOnInit() {
    this.user$.subscribe(user => console.debug('user$', user));
  }

  async signin() {
    try {
      await this.platform.ready();
      const payload = await this.googlePlus.login({
        webClientId: environment.googleplus.webClientId,
      });
      this.sessionService.signin(payload.idToken).subscribe(() => {
        this.toast.show('¡Bienvenid@!');
      });
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
