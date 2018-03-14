import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from '../todolist/todolist.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

const routes: Routes = [
  { path: 'todo/add', component: TodoEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
