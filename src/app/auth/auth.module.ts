import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from './components/signin/signin.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';
import {SigninAkitaComponent} from './components/signin-akita/signin-akita.component';

@NgModule({
  declarations: [SigninComponent, SigninAkitaComponent],
  exports: [SigninComponent, SigninAkitaComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
  ]
})
export class AuthModule { }
