import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule
]
@NgModule({
  declarations: [CreateComponent, ListComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ...materialModules,
    RouterModule
  ],
  exports: [CreateComponent],
  providers: [TodoService],
})
export class TodoModule {}
