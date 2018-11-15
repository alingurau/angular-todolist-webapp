import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { DashboardComponent } from './components/dashboard/pages/dashboard-index/dashboard.component';
import { TaskIndexComponent } from './components/task/pages/task-index/task-index.component';
import { AuthIndexComponent } from './components/auth/pages/auth-index/auth-index.component';
import { AuthModule } from './components/auth/auth.module';
import { AuthRoutingModule } from './components/auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthIndexComponent
  ],
  imports: [
    AuthModule,
    AuthRoutingModule,
    BrowserModule,
    AppRoutingModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
