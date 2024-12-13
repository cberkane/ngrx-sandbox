
/* Step 1 : add the "entity" model & the "state" model */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ToDoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}
