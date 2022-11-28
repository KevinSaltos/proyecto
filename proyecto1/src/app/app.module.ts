import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './not-found/not-found.module';
import { StaticModule } from './static/static.module';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,            
    PagesComponent
  ],
  imports: [
    BrowserModule,
    StaticModule,
    AppRoutingModule,
    NotFoundModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }