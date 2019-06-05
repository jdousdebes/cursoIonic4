import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Home2Page } from './home2.page';
import {SharedModule} from '../../shared/shared.module';
import {AuthModule} from '../../auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: Home2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    AuthModule,
  ],
  declarations: [Home2Page]
})
export class Home2PageModule {}
