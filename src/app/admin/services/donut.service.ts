import { Injectable } from '@angular/core';
import { Donut } from '../model/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  donuts: Donut[] = [
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

  ]
  constructor() { }
}
//the service has a state now which can be used by different components