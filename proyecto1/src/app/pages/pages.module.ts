import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent,
    CatalogoComponent,
    DashboardComponent,
    HomeComponent,
    ProductoComponent,
    UserComponent
  ],
  exports:[
    AboutComponent,
    CatalogoComponent,
    DashboardComponent,
    HomeComponent,
    ProductoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    StaticModule,
    RouterModule
  ]
})
export class PagesModule { }