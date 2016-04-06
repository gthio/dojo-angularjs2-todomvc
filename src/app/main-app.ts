import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ToDoApp} from './components/todo-app/todo-app';

@Component({
  selector: 'main-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/main-app.html',
})
@RouteConfig([
  { path: '/home',       component: ToDoApp,     name: 'ToDoApp', useAsDefault: true },
])
export class MainApp {

  constructor() {}

}
