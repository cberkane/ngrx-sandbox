import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../../store/models/todo.model';
import { AppState } from '../../store/app.state';
import * as TodoActions from '../../store/actions/todo.action';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(state => state.todo.todos);
    this.loading$ = this.store.select(state => state.todo.loading);
    this.error$ = this.store.select(state => state.todo.error);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo(): void {
    const newTodo: Todo = { id: '1', title: 'Learn NgRx Actions', completed: false };
    // this.store.dispatch(TodoActions.addTodo({ todo: newTodo }));
  }
}
