import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
