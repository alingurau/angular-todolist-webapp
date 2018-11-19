import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { DashboardComponent } from './components/dashboard/pages/dashboard-index/dashboard.component';
import { UserLoginComponent } from './components/login/pages/login/user-login.component';
import { AuthModule } from './components/login/auth.module';
import { AuthRoutingModule } from './components/login/auth-routing.module';
import { UserComponent } from './components/user/pages/user-index/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    UserLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    AppRoutingModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
