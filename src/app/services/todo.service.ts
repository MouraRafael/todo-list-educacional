import { Injectable } from '@angular/core';
import { TodoModel } from '../todo/models/todo.model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  cadastrar(todo: TodoModel):void{
    todo.id = uuid.v4();


    localStorage['todos'] = JSON.stringify(todo);
    console.log('[todos]',localStorage['todos']);
  }
}
