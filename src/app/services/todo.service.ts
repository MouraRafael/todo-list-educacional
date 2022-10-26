import { Injectable } from '@angular/core';
import { TodoModel } from '../todo/models/todo.model';
import * as uuid from 'uuid';
import { TodoStatus } from '../todo/enums/status.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  cadastrar(todo: TodoModel): void {
    let todos:TodoModel[] = this.listaTodos();
    console.log(todos)

    todo.id = uuid.v4();


    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  atualizar(todo: TodoModel) {
    let todos = this.listaTodos();

    todos.forEach((todo) => console.log(JSON.stringify(todo)));
    todos.forEach((t, index, todos) => {
      if (todo.id === todo.id) {
        todos[index] = todo;
      }
    });

    localStorage.setItem('number', JSON.stringify(todos));
  }
  listarPorID(id:string):TodoModel{
    const todos:TodoModel[] = this.listaTodos();
    let todo!:TodoModel;

    for(let i = 0; i< todos.length ; i++){
      if (todos[i].id === id){
        todo = todos[i];
        break;
      }
    }
    return todo;
  }
  listaTodos(): TodoModel[] {
    let listagem = JSON.parse(localStorage.getItem('todos')!) as TodoModel[] ?? [];
    return listagem;     //Checa se o localStorage todos existe, e faz um retorno de acordo
  }

  remover(id: string): void {
    //todos.filter((todo) => todo.id !== id);
    let todos = this.listaTodos();

    let novoTodos:TodoModel[] = [];
    for(let i = 0; i < todos.length; i++) {
      if(todos[i].id !== id) {
        novoTodos.push(todos[i]);
      }
    }

    todos = novoTodos;

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  alteraStatus(id: string, status: TodoStatus) {
    const todos = this.listaTodos();

    // todos.forEach((todo, index, todos) => {
    //   if (id === todo.id) {
    //     todos[index].status = status;

    //     if (status === TodoStatus.CONCLUIDO) {
    //       todos[index].dataFinalizacao = new Date();
    //     }
    //   }
    // });

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos[i].status = status;
        if (status == TodoStatus.CONCLUIDO) {
          todos[i].dataFinalizacao = new Date();
        }

        break;
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
