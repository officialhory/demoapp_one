import { Todo } from "../models/ToDo";

export class UpdateTodoCommand {
  constructor(
    public todo: Todo  
    ) {}
}
