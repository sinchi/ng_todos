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

}
