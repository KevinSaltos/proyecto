import { StaticRoutingModule } from './static/static-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
//import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes:Routes = [       
  {path:'', redirectTo:'dashboard', pathMatch:'full'},    
    {path:'**', component:NotFoundComponent}    
 ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    NotFoundRoutingModule,
    AuthRoutingModule,
    StaticRoutingModule   
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }