import { Controller, Get, Post, Param, Put, Delete } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Todo } from "./models/ToDo";
import { ListTodoQuery } from "./queries/listTodo.query";
import { AddTodoCommand } from "./commands/addTodo.command";
import { GetTodoByIdQuery } from "./queries/getTodoById.query";
import { v4 as uuidv4 } from 'uuid';
import { UpdateTodoCommand } from "./commands/updateTodo.command";
import { DeleteTodoCommand } from "./commands/deleteTodo.command";

@Controller('todo')
export class TodoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Get(':id')
  async Get(@Param('id') id: string) : Promise<Todo> {
    return await this.queryBus.execute(new GetTodoByIdQuery(id))
  }

  @Get('List/:page/:limit')
  async List(@Param('page') page: number, @Param('limit') limit: number): Promise<Todo[]> {
    return await this.queryBus.execute(new ListTodoQuery(page, limit));
  }

  @Post(':note/:dueDate')
  async Add(@Param('note') note: string, @Param('dueDate') dueDate: number): Promise<string> {
    const id = uuidv4();
    await this.commandBus.execute(new AddTodoCommand(new Todo(id, note, dueDate)));
    return id;
  }

  @Put(':id/:note/:dueDate') 
  async Update(
    @Param('id') id: string,
    @Param('note') note: string,
    @Param('dueDate') dueDate: number
  ) {
    await this.commandBus.execute(new UpdateTodoCommand(new Todo(id, note, dueDate)));
  }

  @Delete(':id')
  async Delete(@Param('id') id: string) {
    await this.commandBus.execute(new DeleteTodoCommand(id));
  }
}