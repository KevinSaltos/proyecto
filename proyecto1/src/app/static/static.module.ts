import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    StaticComponent
  ],
  exports:[
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StaticModule { }