import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BurgerComponent } from './components/burger/burger.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { HomeComponent } from './views/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './views/users/users.component';
import {AddUserComponent} from "./components/users/add-user/add-user.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BurgerComponent,
    AboutusComponent,
    HomeComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
