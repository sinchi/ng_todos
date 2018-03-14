import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    console.log('TodoEdit');
  }

  addTodo(name: string, event: any): void {
    if (event.key === 'Enter') {
      const todos = this.todoService.getAllTodos();
      const lastId =  (todos && todos.length > 0) ?  todos[todos.length - 1].id : -1;
      const id = lastId + 1;

      const todo = { id, name, creation: new Date(), updated: null, completed: false };
      this.todoService.addTodo(todo);
      event.target.value = '';
    }
  }

}
