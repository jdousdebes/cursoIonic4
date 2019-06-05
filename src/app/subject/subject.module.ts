import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {SubjectDetailComponent} from './subject-detail/subject-detail.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
})
export class SubjectModule { }
