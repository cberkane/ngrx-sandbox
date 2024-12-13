import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { todoReducer } from './store/reducers/todo.reducer';
import { TodoEffects } from './store/effects/todo.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'todo', reducer: todoReducer }),
    provideEffects(TodoEffects),
],
};
