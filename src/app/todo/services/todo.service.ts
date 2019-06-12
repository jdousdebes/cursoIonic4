import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(environment.api + 'todos');
  }

  getCompletedTodos() {
    return this.http.get(environment.api + 'todos', {
      params: { completed: true },
    });
  }

  addTodo(todo: string) {
    return this.http.post(environment.api + 'todos', { todo: todo });
  }

  changeTodoStatus(id: string, completed: boolean) {
    return this.http.post(environment.api + 'todos/' + id, { completed: completed });
  }

  deleteTodo(id: string) {
    return this.http.delete(environment.api + 'todos/' + id);
  }
}
