import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { ListTodoQueryHandler } from "./queryHandlers/listTodo.queryHandler";
import { AddTodoCommandHandler } from "./commandHandlers/addTodo.CommandHandler";
import { UpdateTodoCommandHandler } from "./commandHandlers/updateTodo.CommandHandler";
import { DeleteTodoCommandHandler } from "./commandHandlers/deleteTodo.CommandHandler";
import { GetTodoByIdQueryHandler } from "./queryHandlers/getTodoById.queryHandler";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "src/repo/todoEntity";
import { TodoRepoService } from "src/repo/todoRepo.Service";

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([TodoEntity])
  ],
  controllers: [TodoController],
  providers: [
    AddTodoCommandHandler,
    UpdateTodoCommandHandler,
    DeleteTodoCommandHandler,

    GetTodoByIdQueryHandler,
    ListTodoQueryHandler,
    
    TodoRepoService
  ]
})
export class TodoModule {}