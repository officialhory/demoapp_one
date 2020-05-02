import { Todo } from "../models/ToDo";

export class AddTodoCommand {
  constructor(
    public todo: Todo
  ) {}
}