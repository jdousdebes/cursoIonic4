import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home-page.component';
import { AuthModule } from '../../auth/auth.module';
import { TodoModule } from '../../todo/todo.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), AuthModule, TodoModule],
  declarations: [HomePage],
})
export class HomePageModule {}
