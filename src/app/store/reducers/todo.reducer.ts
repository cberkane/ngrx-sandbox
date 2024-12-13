import { createReducer, on } from '@ngrx/store';
import { ToDoState } from '../models/todo.model';
import * as TodoActions from "../actions/todo.action";

const initialState: ToDoState = {
  todos: [],
  loading: false,
  error: null,
};

/* Step 4: Créer le reducer qui écoute les actions */
export const todoReducer = createReducer(
  initialState,

  // Load
  on(TodoActions.loadTodos, (state) => {
    console.log('load')
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),

  // Load success
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  // Load Failure
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add
  on(TodoActions.addTodo, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    }
  }),

  // Add success
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      todos: [...state.todos, todo],
      loading: false,
      error: null,
    }
  }),

   // Add failure
   on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      todos: [...state.todos, todo],
      loading: false,
      error: null,
    }
  }),
);
