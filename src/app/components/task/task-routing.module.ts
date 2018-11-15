import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskIndexComponent } from './pages/task-index/task-index.component';

const routes: Routes = [
  {
    path: 'task', component: TaskIndexComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
