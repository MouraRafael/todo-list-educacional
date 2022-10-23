import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos!: TodoModel[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.todos = this.todoService.listaTodos()
  }
  listar():TodoModel[]{
    return this.todos;
  }

  remover(id:string):void{
    this.todoService.remover(id);
  }
  alterarStatus():void{}
  editar():void{}
}
