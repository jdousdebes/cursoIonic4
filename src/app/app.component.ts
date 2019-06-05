import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionService } from './auth/state/session.service';
// import { SessionService } from './auth/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Cursos disponibles',
      url: '/available-subjects',
      icon: 'list',
    },
    {
      title: 'Mi perfil',
      url: '/my-profile',
      icon: 'person',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sessionService: SessionService,
    private alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.sessionService.check();
    });
  }

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
