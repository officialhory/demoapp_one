import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteTodoCommand } from "../commands/deleteTodo.command";
import { TodoRepoService } from "src/repo/todoRepo.Service";
import { throws } from "assert";


@CommandHandler(DeleteTodoCommand)
export class DeleteTodoCommandHandler implements ICommandHandler {
  
  constructor(
    private tdrs: TodoRepoService
  ) {}

  async execute(command: DeleteTodoCommand) {
    console.log(`Delete ${command.id}`);
    await this.tdrs.deleteAsync(command.id);
  }
}