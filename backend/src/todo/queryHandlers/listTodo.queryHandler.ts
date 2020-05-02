import { Todo } from "../models/ToDo";
import { ListTodoQuery } from "../queries/listTodo.query";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(ListTodoQuery)
export class ListTodoQueryHandler implements IQueryHandler<ListTodoQuery> {

  constructor() {}

  public async execute(query: ListTodoQuery) : Promise<Todo[]>{
    console.log(`page: ${query.page}, page size: ${query.pageSize}`)
    const one = new Todo('', 'sample text one', Date.now());
    const two =  new Todo('', 'sample text two', Date.now());

    return [one, two]
  }
}
