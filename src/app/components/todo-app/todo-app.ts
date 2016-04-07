import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {RouteParams} from 'angular2/router';
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

  routeParams;
  todoStore: todoStore;
  newText = '';

  constructor(todoStore: todoStore,
    routeParams: RouteParams) {
      
      this.todoStore = todoStore;
      this.routeParams = routeParams;
  }
  
  addTodo(){
    if (this.newText.trim().length > 0){
      this.todoStore.add(this.newText);
      this.newText = '';
    }
  }
  
  editTodo(todo: todo){
    todo.editing = true;
  }
  
  cancelEditing(todo: todo){
    todo.editing = false;
  }
  
  stopEditing(todo: todo, 
    editedTitle: String){
      
      todo.title = editedTitle;
      todo.editing = false;    
  }
  
  updateEditing(todo: todo,
    editedTitle: String){
      
      editedTitle = editedTitle.trim();
      todo.editing = true;
      
      if (editedTitle.length == 0){
        return this.todoStore.remove(todo);
      }
      
      todo.title = editedTitle;
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
  
  getViewMode(){
    
    var mode = "all";
    var value = this.routeParams.get('status'); 

    if (value == "active" ||
      value == "completed"){
      
      mode = value;    
    }    
    
    return mode;
  }
  
  getCollectionByCompletion(completed: Boolean){
    
    if (completed == null){
      return this.todoStore.todos;
    }
    else if (completed){
      return this.todoStore.getCompleted();
    }
   
    return this.todoStore.getRemaining();
  }
  
  getCompletionStatusFilter(){
    
    var mode = null;
    var value = this.routeParams.get('status'); 

    if (value == "active") {
      mode = false;
    } 
    else if (value == "completed"){
      mode = true;    
    }    
    
    return mode;
  }  
}
