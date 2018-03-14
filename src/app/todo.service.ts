import { Injectable } from '@angular/core';
import { Todo } from './todo';

const todos: Todo[] = [
  { id: 1, name: 'buy milk', creation: new Date(), updated: null, completed: true },
  { id: 2, name: 'buy egg', creation: new Date(), updated: null, completed: false },
  { id: 3, name: 'buy water', creation: new Date(), updated: null, completed: false }
];

@Injectable()
export class TodoService {

  private allTodos: Todo[] = todos;
  constructor() { }

  getAllTodos(): Todo[] {
    return this.allTodos;
  }

  setAllTodos(allTodos: Todo[]): void {
    this.allTodos = allTodos;
  }

  changeTodo(todo: Todo): void {
    this.allTodos.forEach(t => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
    });
  }

  updateTodo(value: string, todo: Todo): void {
    this.allTodos = this.allTodos.map( t => {
      if (t.id === todo.id) {
        t.name = value;
      }
      return t;
    });
  }

  addTodo(todo: Todo): void {
    this.allTodos.push(todo);
  }

  deleteTodo(todo: Todo): void {
    const index = this.allTodos.findIndex(t => t.id === todo.id);
    this.allTodos.splice(index, 1);
  }

}
