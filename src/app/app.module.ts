import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { DashboardComponent } from './components/dashboard/pages/dashboard-index/dashboard.component';
import { UserComponent } from './components/user/pages/user-index/user.component';
import { UserModule } from './components/user/pages/user.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    TaskModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
