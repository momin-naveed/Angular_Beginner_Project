import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: Number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Onclick has been triggered');
    // localStorage.setItem('todos', JSON.stringify(this.todo));
  }
  onCheckBoxClick(todo: Todo) {
    console.log(todo);
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }
}
