import {todo} from './todo';
import {Injectable} from 'angular2/core';

@Injectable()
export class todoStore{
  
  todos: Array<todo>;
  
  constructor(){
        
    var persisted = JSON.parse(localStorage.getItem('angular2.todomvc') ||
      []);
   
    this.todos = persisted.map((item: {_title: String, 
      _completed: Boolean}) => {
            
        var ret = new todo(item._title);
            
        ret.completed = item._completed;
            
        return ret;            
      })
  }
  
  add(title: String){
    this.todos.push(new todo(title));
    this.updateStore();
  }
  
  remove(todo: todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }
  
  removeCompleted(){
    this.todos = this.getFilteredTodos(false);
    this.updateStore();
  }
  
  toggleCompletion(todo: todo){
    todo.completed = !todo.completed;
    this.updateStore();    
  }
  
  getRemaining(){
    return this.getFilteredTodos(false);
  }
  
  getCompleted(){
    return this.getFilteredTodos(true);
  }
  
  setAllTo(completed: Boolean){
    this.todos.forEach((todo: todo) => todo.completed = completed);
    this.updateStore();    
  }
  
  private getFilteredTodos(completed: Boolean){
    return this.todos
      .filter((todo: todo) => todo.completed == completed);
  }
  
  private updateStore(){
    localStorage.setItem('angular2.todomvc',
      JSON.stringify(this.todos));
  }  
}