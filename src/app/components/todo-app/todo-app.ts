import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {todo} from './todo';
import {todoStore} from './todoStore';

@Component({
  selector: 'mainApp',
  templateUrl: 'app/components/todo-app/todo-app.html',
  styleUrls: ['app/components/todo-app/todo-app.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ToDoApp {

  todoStore: todoStore;
  newText = '';

  constructor(todoStore: todoStore) {
    this.todoStore = todoStore;
  }
  
  addTodo(){
    if (this.newText.trim().length > 0){
      this.todoStore.add(this.newText);
      this.newText = '';
    }
  }
  
  remove(todo: todo){
    this.todoStore.remove(todo);
  }
  
  removeCompleted(){
    this.todoStore.removeCompleted();
  }
  
  toggleCompletion(todo: todo){
    this.todoStore.toggleCompletion(todo);
  }
  
  getCompleted(){
    this.todoStore.getCompleted();
  }
}
