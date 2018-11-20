import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { DashboardComponent } from './components/dashboard/pages/dashboard-index/dashboard.component';
import { LoginComponent } from './components/login/pages/login/login.component';
import { LoginModule } from './components/login/login.module';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { UserComponent } from './components/user/pages/user-index/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    LoginModule,
    LoginRoutingModule,
    AppRoutingModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
