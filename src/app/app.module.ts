import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersoldComponent } from './pages/usersold/usersold.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './components/menu/menu.component';
import { HeaderComponent} from './components/header/header.component';
import { LoginComponent} from './pages/login/login.component';
import { DashboardComponent} from './pages/dashboard/dasboard.component';
import { BooksService } from './services/books.service';
import { HomeComponent} from './pages/home/home.component';
import { WhoweareComponent} from './pages/whoweare/whoweare.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';
import { ServicesComponent} from './pages/services/services.component';
import { ContactComponent} from './pages/contact/contact.component';
import { UserService } from './services/users.service';
import { UseroldService } from './services/usersold.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersoldComponent,
    MenuComponent,
    HeaderComponent,
    LoginComponent,
    WhoweareComponent,
    DashboardComponent,
    PortfolioComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  providers: [UserService,UseroldService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
