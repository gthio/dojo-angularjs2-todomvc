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
    this.todos = this.getFilteredTodos(true);
  }
  
  private getFilteredTodos(completed: Boolean){
    return this.todos
      .filter((todo: todo) => todo.completed == completed);
  }
}