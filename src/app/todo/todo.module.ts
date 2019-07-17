import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoMapComponent} from './components/todo-map/todo-map.component';

@NgModule({
  declarations: [TodoListComponent, TodoMapComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule {}
