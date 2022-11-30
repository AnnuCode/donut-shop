import { Component, OnInit } from '@angular/core';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css'],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}
  ngOnInit(): void {
    this.donuts = [
      {
        id: 'asdfsd',
        name: 'Chocolate',
        description: 'chocolate wonderland',
        icon: 'just-chocolate',
        price: 119,
        promo: 'limited'
      },
      {
        id: 'xcvsdf',
        name: 'Vanilla',
        description: 'Tasty vanilla',
        icon: 'vanilla-sundae',
        price: 129,
        promo: 'new'
      },
      {
        id: 'sdfgvd',
        name: 'Chocolate Caramel',
        description: 'Chocolate dazzled with caramel',
        icon: 'caramel-swirl',
        price: 129,
        
      },
      {
        id: 'fsjner',
        name: 'Sour Supreme',
        description: 'For the sour lovers',
        icon: 'sour-supreme',
        price: 139,
        
      },
      {
        id: 'lkjief',
        name: 'Zesty Lemon',
        description: 'For the lemon lovers',
        icon: 'zesty-lemon',
        price: 129,
        
      },

    ];
  }
  trackById(index: number, value: Donut) {
    return value.id;
  }
}
