import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule, Storage} from '@ionic/storage';

import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {environment} from '../environments/environment';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import {GooglePlus} from '@ionic-native/google-plus/ngx';

// JWT
const storage = new Storage({});
export function jwtOptionsFactory() {
  return {
    tokenGetter: () => storage.get('token'),
    whitelistedDomains: [
      environment.host,
    ],
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,


    // ionic
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,

    // @angular/flex-layout
    FlexLayoutModule,

    // http
    HttpClientModule,

    // angular
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // jwt
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      },
    }),

    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
