import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './pages/login/login.component';
import { DashboardComponent} from './pages/dashboard/dasboard.component';
import { UsersComponent} from './pages/users/users.component';
import { UsersoldComponent} from './pages/usersold/usersold.component';
//import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'usersold', component: UsersoldComponent },
];

/*
const appRoutes: Routes = [
  { path: '', data: { title: 'Content Views' }, children: CONTENT_ROUTES }
];*/


@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  //  RouterModule.forRoot(appRoutes , { useHash: false })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
