import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: any[];
  completedTodos: any[];
  form: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) {}

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

  addTodo() {
    return this.todoService.addTodo(this.form.get('todo').value).subscribe(() => {
      this.form.reset({
        todo: null,
      });
      this.getTodos();
    });
  }

  todoChange(todo: any) {
    console.debug('todoChange', todo);
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
