import { AddTodoCommandHandler } from "../commandHandlers/addTodo.CommandHandler";
import { UpdateTodoCommand } from "./updateTodo.command";
import { DeleteTodoCommandHandler } from "../commandHandlers/deleteTodo.CommandHandler";

export const CommandHandlers = [
  AddTodoCommandHandler,
  UpdateTodoCommand,
  DeleteTodoCommandHandler
];