import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--------


import { IndexComponent } from './components/index/index.component';
import { ReadComponent } from './components/read/read.component';

@NgModule({
  declarations: [
    IndexComponent, 
    ReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // <--------
  ]
})
export class BookModule { }
