import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../models/todo.model';
import { TodoStatusLabel } from "../enums/status.enum";
import { MatTableDataSource } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos!: TodoModel[];
  displayedColumns: string[] = ['todo','status','dataCriacao','dataFinalizacao','edit','remove']
  dataSource!:MatTableDataSource<TodoModel>
  clickedRows!: TodoModel


  constructor(private todoService: TodoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer:DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "kickstarter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/kickstarter.svg"))
    }

  ngOnInit(): void {

    this.todos = this.todoService.listaTodos()
    this.dataSource = new MatTableDataSource(this.todos)
  }
  listar():TodoModel[]{
    return this.todos;
  }

  remover(id:string):void{
    this.todoService.remover(id);
  }

  todoStatusLabel(status:number):string{
    return TodoStatusLabel.get(status)!;
  }

  alterarStatus(id:string):void{}
  editar(id:string):void{}
}
