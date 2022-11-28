import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  exports:[
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotFoundModule { }