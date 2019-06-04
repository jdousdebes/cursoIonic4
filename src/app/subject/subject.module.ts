import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubjectDetailComponent} from "./components/subject-detail/subject-detail.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  declarations: [SubjectDetailComponent],
  entryComponents: [SubjectDetailComponent]
})
export class SubjectModule { }
