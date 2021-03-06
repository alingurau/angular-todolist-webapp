import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/pages/dashboard-index/dashboard.component';
import { UserComponent } from './components/user/pages/user-index/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserComponent }

  // { path: 'tasks', loadChildren: './task/task.module#TaskModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
