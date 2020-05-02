import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateTodoCommand } from "../commands/updateTodo.command";
import { TodoRepoService } from "src/repo/todoRepo.Service";


@CommandHandler(UpdateTodoCommand)
export class UpdateTodoCommandHandler implements ICommandHandler {
  
  constructor(
    private tdrs: TodoRepoService
  ) {}

  async execute(command: UpdateTodoCommand) {
    console.log(`Updating ${command.todo.id}, with ${command.todo.note}, due: ${command.todo.dueDate}`);
    this.tdrs.updateAsync(command.todo.id, command.todo.note,command.todo.dueDate);
  }
}