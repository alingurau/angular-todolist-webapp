import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthIndexComponent } from './pages/auth-index/auth-index.component';

const routes: Routes = [
  { path: 'auth', component: AuthIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
