import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SigninAkitaComponent} from './components/signin-akita/signin-akita.component';

@NgModule({
  declarations: [SigninAkitaComponent],
  exports: [SigninAkitaComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class AuthModule { }
