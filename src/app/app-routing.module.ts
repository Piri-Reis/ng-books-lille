import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { IndexComponent as BookIndexComponent } from './modules/book/components/index/index.component';
import { ReadComponent as BookReadComponent } from './modules/book/components/read/read.component';

const routes: Routes = [

  // Homepage
  {
    path: "",
    component: HomepageComponent
  },


  // site.com/books
  // site.com/books/42

  // Books
  {
    path: "books",
    children: [
      {
        path: '', //site.com/books
        component: BookIndexComponent
      },
      {
        path: ':id', // site.com/books/42
        component: BookReadComponent
      }
    ]
  }


  // // Book List
  // {
  //   path: "books",
  //   component: BookIndexComponent
  // },

  // // Book Info
  // {
  //   path: "book/:id", // site.com/book/42
  //   component: BookReadComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
