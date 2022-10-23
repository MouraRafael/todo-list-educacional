import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { TodoStatus } from '../enums/status.enum';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService:TodoService) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      nome: [
        '', //valor inicial do input(elemento)
        [
          Validators.required, //Validação de campo requerido
          Validators.pattern(/[a-zAZ]/), //Validação de patter/regex
          Validators.minLength(4), // tamanho mínimo de caracteres
          Validators.maxLength(150), // tamanho máximo de caracteres
        ],
      ],
    });
  }

  cadastrar() {
    const todo = this.todoForm.getRawValue() as TodoModel;
    todo.dataCriacao = new Date();
    todo.status = TodoStatus.PENDENTE;


    this.todoService.cadastrar(todo);
  }

  get nome() {
    return this.todoForm.get('nome')!;
  }
}
