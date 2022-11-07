import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../models/todo.model';
import { TodoStatusLabel } from "../enums/status.enum";
import { MatTableDataSource } from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos!: TodoModel[];
  displayedColumns: string[] = ['todo','status','dataCriacao','dataFinalizacao','edit','remove'];
  dataSource!:MatTableDataSource<TodoModel>;

  clickedRow!:TodoModel;


  constructor(private todoService: TodoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer:DomSanitizer,
    private router: Router) {
      this.matIconRegistry.addSvgIcon(
        "kickstarter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/kickstarter.svg"))
    }

  ngOnInit(): void {

    this.todoService.listar().subscribe({
      next: (todoList:TodoModel[])=>{
        this.todos = todoList;
        this.dataSource = new MatTableDataSource(this.todos)
      },
      error: (err)=>{
        console.log(err)
      }
  })
  }
  listar():TodoModel[]{
    return this.todos;
  }

  remover(id:string):void{
    this.todoService.remover(id).subscribe({
      next: ()=>{},
      error: (err)=>{
        console.log(err)
      }
  });
  }

  todoStatusLabel(status:number):string{
    return TodoStatusLabel.get(status)!;
  }

  alterarStatus(id:string):void{}
  editar(id:string):void{
    this.router.navigate(["/todo/edit",id])
  }
}
