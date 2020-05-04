import { ListTodoQuery } from "../queries/listTodo.query";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TodoRepoService } from "src/repo/todoRepo.Service";
import { Pagination } from "nestjs-typeorm-paginate";
import { TodoEntity } from "src/repo/todoEntity";

@QueryHandler(ListTodoQuery)
export class ListTodoQueryHandler implements IQueryHandler<ListTodoQuery> {

  constructor(
    private tdrs: TodoRepoService
  ) {}

  public async execute(query: ListTodoQuery) : Promise<Pagination<TodoEntity>>{
    console.log(`[List] page: ${query.page}, page size: ${query.limit}`)

    const page = query.page;
    const limit = query.limit;
    return await this.tdrs.listAsync({page, limit});
  }
}
