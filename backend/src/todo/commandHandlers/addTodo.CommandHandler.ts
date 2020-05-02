import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddTodoCommand } from "../commands/addTodo.command";
import { TodoRepoService } from "src/repo/todoRepo.Service";

@CommandHandler(AddTodoCommand)
export class AddTodoCommandHandler implements ICommandHandler {
  
  constructor(
    private tdrs: TodoRepoService
  ){}

  async execute(command: AddTodoCommand) {
    console.log(`[HANDLER] ADD TODO note: ${command.todo.note}, due: ${command.todo.dueDate}`)
    this.tdrs.addAsync(command.todo.id, command.todo.note, command.todo.dueDate);
  }
}