import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from './components/signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  exports: [SigninComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
