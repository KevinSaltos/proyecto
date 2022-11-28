import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { StaticComponent } from './static.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'static', 
  component:StaticComponent,
  children:[
    {path:'breadcrumbs', component:BreadcrumbsComponent},
    {path:'footer', component:FooterComponent},
    {path:'header', component:HeaderComponent},
    {path:'sidebar', component:SidebarComponent},
  ]}  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StaticRoutingModule { }