import { UserComponent } from './user/user.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes:Routes = [  
  {path:'dashboard',
  component:PagesComponent,
  children:[  
  {path:'about', component:AboutComponent},
  {path:'catalogue', component:CatalogoComponent},
  {path:'dashboard', component:DashboardComponent},  
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductoComponent},  
  {path:'user', component:UserComponent},
  ]}    
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PagesRoutingModule { }