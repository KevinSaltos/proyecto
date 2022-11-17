import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { UserComponent } from './user/user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './static/header/header.component';
import { NavComponent } from './static/nav/nav.component';
import { FooterComponent } from './static/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
