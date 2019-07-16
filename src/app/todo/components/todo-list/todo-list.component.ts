import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ToastService} from "../../../shared/services/toast.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: any[];
  completedTodos: any[];
  form: FormGroup;

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private geolocation: Geolocation,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      todo: [null, Validators.required],
    });

    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response: any) => {
      this.todos = response.data;
    });
    this.todoService.getCompletedTodos().subscribe((response: any) => {
      this.completedTodos = response.data;
    });
  }

  async addTodo() {
    let latLng: any;
    await this.geolocation.getCurrentPosition()
      .then((resp) => {
        latLng = resp;
      }).catch((error) => {
        this.toastService.show('Error obteniendo la ubicación' + error, 1500);
    });
    return this.todoService.addTodo(this.form.get('todo').value, latLng.coords.latitude, latLng.coords.longitude)
      .subscribe(() => {
      this.form.reset({
        todo: null,
      });
      this.getTodos();
    });
  }

  todoChange(todo: any) {
    this.todoService.changeTodoStatus(todo.id, todo.completed).subscribe(() => {
      this.getTodos();
    });
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.getTodos();
    });
  }
}
