import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyProfilePage } from './my-profile.page';
import {AuthModule} from '../auth/auth.module';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AuthModule,
    FlexLayoutModule,
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
