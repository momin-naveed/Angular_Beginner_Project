import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    if (this.title.trim() === '' || this.desc.trim() === '') {
      return;
    }
    const todo = {
      serialNo: 5,
      title: this.title,
      desc: this.desc,
      isActive: true,
    };
    this.todoAdd.emit(todo);

    this.resetForm();
  }
  private resetForm() {
    this.title = '';
    this.desc = '';
  }
}
