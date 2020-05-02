import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'

@Entity()
export class TodoEntity {

  constructor(id: string, note: string, dueDate: number) {
    this.id = id;
    this.note = note,
    this.dueDate = dueDate
  }

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  note: string;

  @Column()
  dueDate: number;
}
