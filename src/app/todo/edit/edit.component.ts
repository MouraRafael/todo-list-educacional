import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:string;
  todo!:TodoModel;
  todoForm!:FormGroup;
  msg!:string;

  constructor(
    private route: ActivatedRoute,
    private service: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //const id = +this.route.snapshot.params['id'] //Faaz o js entender que o valor passado como string seja entendido como numérico
    const id = this.route.snapshot.params['id']
    this.id = id;

    this.service.localizarPorID(id).subscribe({
      next: (todo:TodoModel)=>{
        this.todo = todo;
      },
      error: (err)=>{
        console.log(err)
      }
  });
    console.log(this.todo);

    this.todoForm = this.formBuilder.group({
      nome:['',[
        Validators.required,
        Validators.pattern(/^[A-zÀ-ú0-9 ]+$/),
        Validators.minLength(4),
        Validators.maxLength(500)
      ]],
      status:[
        '',
        [Validators.required]
      ]
    })

    this.loadForm(this.todo);
  }

  editar():void{

    this.todo.nome = this.todoForm.get('nome')!.value
    this.todo.status = +this.todoForm.get('status')!.value;

    this.service.atualizar(this.todo).subscribe({
      next: ()=>{
        this.todoForm.reset();
        this.msg= "atualizado com sucesso"
      },
      error: (err)=>{
        console.log(err);
        this.todoForm.reset();
        this.msg = "Falha ao atualizar";
      }
  });;

    this.msg = "Atualizado com sucesso!";
  }

  loadForm(todo:TodoModel):void{
    this.todoForm.patchValue({
      nome: todo.nome,
      status: ''+todo.status
    })
  }

  get nome() {return this.todoForm.get('nome')!;}
}
