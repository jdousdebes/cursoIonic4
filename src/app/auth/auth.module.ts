import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from './components/signin/signin.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [SigninComponent],
  exports: [SigninComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
  ]
})
export class AuthModule { }
