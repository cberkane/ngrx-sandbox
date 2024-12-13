import { ToDoState } from "./models/todo.model";


/* Step 2: add the newly created state to a general state */
export interface AppState {
  todo: ToDoState;
}
