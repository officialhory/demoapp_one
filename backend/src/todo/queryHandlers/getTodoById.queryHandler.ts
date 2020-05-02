import { Todo } from "../models/ToDo";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTodoByIdQuery } from "../queries/getTodoById.query";
import { TodoRepoService } from "src/repo/todoRepo.Service";

@QueryHandler(GetTodoByIdQuery)
export class GetTodoByIdQueryHandler implements IQueryHandler<GetTodoByIdQuery> {

  constructor(
    private tdrs: TodoRepoService
  ) {}

  public async execute(query: GetTodoByIdQuery) : Promise<Todo>{
    console.log(`id: ${query.id}`)

    return await this.tdrs.getAsync(query.id);
  }
}
