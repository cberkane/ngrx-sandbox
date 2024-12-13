import { Injectable } from '@angular/core';
import { Todo } from '../store/models/todo.model'; // Je viens de créer une dépendance
import { delay, Observable, of } from 'rxjs';

const fakeData: Todo[] = [
  { id: '1', title: 'What is going on', completed: true },
  { id: '2', title: 'Nothing is going on', completed: true },
  { id: '3', title: 'What else can I say', completed: true },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  void(): void {
    console.log("Im the void you needed to hear");
  }

  getTodos(): Observable<Todo[]> {
    return of(fakeData).pipe(
      delay(2000),
    )
  }
}
