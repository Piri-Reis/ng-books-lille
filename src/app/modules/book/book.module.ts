import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './components/index/index.component';
import { ReadComponent } from './components/read/read.component';
// import { CreateComponent } from './components/create/create.component';
// import { UpdateComponent } from './components/update/update.component';
// import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    IndexComponent, 
    ReadComponent, 
    // CreateComponent, 
    // UpdateComponent, 
    // DeleteComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BookModule { }
