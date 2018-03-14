
import { Component, OnInit, Input, ViewChild, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  @Input() todo: Todo;
  edit: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.edit = false;
  }

  onTodoEdit(todo: Todo): void {
    this.edit = !this.edit;
  }

  onEdit(todo: Todo, value: string, event: any = null ): void {
    if ( event && event.key === 'Enter' || event === null) {
        this.todoService.updateTodo(value, todo);
        this.edit = !this.edit;
    }
  }

  onTodoComplete(todo: Todo): void {
    this.todoService.changeTodo(todo);
  }

  onTodoDelete(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }

}
