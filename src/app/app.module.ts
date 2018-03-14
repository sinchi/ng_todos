import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TodoEditComponent } from './todo-edit/todo-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
