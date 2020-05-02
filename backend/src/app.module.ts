import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { RepoModule } from './repo/repo.module';

@Module({
  imports: [
    TodoModule,
    RepoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
