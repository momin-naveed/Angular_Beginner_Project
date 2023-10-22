import { Component } from '@angular/core';
import { Todo } from '../../todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos') || '';
    if (this.localItem === '') {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    // this.todos = this.todos.filter(function (item) {
    //   return item !== todo;
    // });

    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);

    this.todos = this.todos.filter((item) => item !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index: number = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
    console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
