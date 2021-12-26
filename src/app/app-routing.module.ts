import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoweareComponent} from './pages/whoweare/whoweare.component';
import { HomeComponent} from './pages/home/home.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';
import { ContactComponent} from './pages/contact/contact.component';
import { ServicesComponent} from './pages/services/services.component';

import { UsersComponent} from './pages/users/users.component';
import { UsersoldComponent} from './pages/usersold/usersold.component';
import { LoginComponent} from './pages/login/login.component';
import { DashboardComponent} from './pages/dashboard/dasboard.component';
//import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'whoweare', component: WhoweareComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
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
