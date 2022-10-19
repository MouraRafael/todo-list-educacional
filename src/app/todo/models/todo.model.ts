import { TodoStatus } from "../enums/status.enum";

export interface TodoModel{
  id?: number
  nome:string;
  status:TodoStatus;
  dataCriacao:Date;
  dataFinalizacao:Date;
}
