import { NotFoundComponent } from './../not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [  
  {path:'not-found',
  component:NotFoundComponent,
  children:[
    {path:'not-found', component:NotFoundComponent}
  ]}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NotFoundRoutingModule { }