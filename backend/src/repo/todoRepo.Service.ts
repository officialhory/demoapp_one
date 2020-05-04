import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todoEntity";
import { Repository } from "typeorm";
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';


@Injectable()
export class TodoRepoService {

  constructor(@InjectRepository(TodoEntity) private readonly todoRepo: Repository<TodoEntity>) {}

  public getAsync(id: string): Promise<TodoEntity> {
    const e = this.todoRepo.findOne(id).catch(() => {
      console.log('[REPO] ERROR GET');
      return null;
    });
    return e;
  }

  public listAsync(opt: IPaginationOptions): Promise<Pagination<TodoEntity>> {
    const qb = this.todoRepo.createQueryBuilder('c');
    qb.orderBy('c.id', 'DESC');

    return paginate<TodoEntity>(qb, opt);
  }
  
  public async addAsync(id: string, note: string, dueDate: number) {
    this.todoRepo.save(new TodoEntity(id, note, dueDate)).catch((err) => {
      console.log('[REPO] ERROR ADD');
      console.log(err);
    });
  }

  public async updateAsync(id: string, note: string, dueDate: number) {
    this.todoRepo.update(id, {note: note}).catch((err) => {
      console.log(`[REPO] ERROR UPDATE Due date ${note}`);
      console.log(err);
    });
    this.todoRepo.update(id, {dueDate: dueDate}).catch((err) => {
      console.log(`[REPO] ERROR UPDATE Due date ${dueDate}`);
      console.log(err);
    });
  }

  public async deleteAsync(id: string) {
    this.todoRepo.delete(id).catch((err) => {
      console.log('[REPO] ERROR DELETE TODO');      
      console.log(err);
    });
  }
}