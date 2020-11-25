import { Component, OnInit } from '@angular/core';

import { BookInterface } from './../../interfaces/book-interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  books: Array<BookInterface> = [
    {
      id: 1,
      title: "Mon premier livre",
      price: 49.99,
      illustration: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romantic-love-story-book-cover-design-template-a1188e523cb9f6495f3c022a1d9d2928.jpg?ts=1588747775"
    },

    {
      id: 2,
      title: "Mon second livre",
      price: 2,
      description: "lorem ipsum dolor sit amet...",
      illustration: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9.jpg?ts=1561547637"
    },

    {
      id: 42,
      title: "Mon Super livre",
      price: 20.99,
      illustration: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"
    },
    
    {
      id: 4,
      title: "Mon Joli livre",
      price: 99.99,
      illustration: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-kindle-book-cover-design-template-bd12cf83a9f9d72327e372c5db1d2883.jpg?ts=1561443942"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  // for (let i=0; i<books.length; i++)
  // {
  //   console.log( books[i].title );
  // }

}
