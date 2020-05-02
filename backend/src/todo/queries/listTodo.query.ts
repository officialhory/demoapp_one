export class ListTodoQuery {
  constructor (
    public page: number = 1,
    public pageSize : number = 10
  ) {}
}