import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskIndexComponent } from './pages/task-index/task-index.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TaskIndexComponent
  ],
  imports: [
    TaskRoutingModule,
    CommonModule
  ]
})
export class TaskModule { }
