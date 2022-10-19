import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoStatus } from '../enums/status.enum';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  todoForm!: FormGroup;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      nome:['',[Validators.required, Validators.pattern(/(a-Z)/)]]
    })
  }

  cadastrar(){
    const todo = this.todoForm.getRawValue() as TodoModel;
    todo.dataCriacao = new Date();
    todo.status = TodoStatus.PENDENTE;


    console.log(todo);
  }

  get nome() {return this.todoForm.get('nome')!;}

}
