import {todo} from './todo';
import {Injectable} from 'angular2/core';

@Injectable()
export class todoStore{
  
  todos: Array<todo>;
  
  constructor(){
    this.todos = [];
  }
  
  add(title: String){
    this.todos.push(new todo(title));
  }
  
  remove(todo: todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  
  removeCompleted(){
    this.todos = this.getFilteredTodos(false);
  }
  
  toggleCompletion(todo: todo){
    todo.completed = !todo.completed;
  }
  
  getRemaining(){
    return this.getFilteredTodos(false);
  }
  
  getCompleted(){
    return this.getFilteredTodos(true);
  }
  
  allCompleted(){
    return this.todos.length == this.getFilteredTodos(true).length;
  }
  
  setAllTo(completed: Boolean){
    this.todos.forEach((todo: todo) => todo.completed = completed);
  }
  
  private getFilteredTodos(completed: Boolean){
    return this.todos
      .filter((todo: todo) => todo.completed == completed);
  }
}