import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from './components/signin/signin.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [SigninComponent],
  exports: [SigninComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class AuthModule { }
