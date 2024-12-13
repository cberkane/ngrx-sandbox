import { createAction, emptyProps, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";


/* Step 3: Add actions  */
export const loadTodos = createAction(
  '[Todo] load Todos',
);

export const loadTodosSuccess = createAction(
  '[Todo] load Todos success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] load Todos failure',
  props<{ error: string }>()
);

export const addTodo = createAction(
  '[Todo] add Todo',
);

export const addTodoSuccess = createAction(
  '[Todo] add Todo success',
  props<{ todo: Todo }>(),
);

export const addTodoFailure = createAction(
  '[Todo] add Todo failure',
  props<{ error: string }>(),
);
