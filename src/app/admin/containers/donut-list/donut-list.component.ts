import { Component, OnInit } from '@angular/core';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit{
  donuts!: Donut[]
  

  constructor(){}
  ngOnInit(): void {
    this.donuts = [
      {
        id: 'asdfsd',
        name: 'Chocolate',
        description: 'chocolate wonderland',
        icon: 'just-chocolate',
        price: 119
      },
      {
        id: 'xcvsdf',
        name: 'Vanilla',
        description: 'Tasty vanilla',
        icon: 'vanilla-sundae',
        price: 129
      },
      {
        id: 'sdfgvd',
        name: 'Chocolate Caramel',
        description: 'Chocolate dazzled with caramel',
        icon: 'caramel-swirl',
        price: 129
      }
    ]

    
  }
}
