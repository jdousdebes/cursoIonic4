import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvailableSubjectsPage } from './available-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableSubjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvailableSubjectsPage]
})
export class AvailableSubjectsPageModule {}
