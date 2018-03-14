import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[];
  typeOfElement: String = 'checkbox';

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getAllTodos();
  }

}
