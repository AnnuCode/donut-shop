import { Component, OnInit } from '@angular/core';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit{
  donuts!: Donut[]
  donut!: Donut

  constructor(){}
  ngOnInit(): void {
    this.donuts = [
      {
        id: 'asdfsd',
        name: 'Chocolate',
        description: 'chocolate wonderland'
      },
      {
        id: 'xcvsdf',
        name: 'Vanilla',
        description: 'Tasty vanilla'
      },
      {
        id: 'sdfgvd',
        name: 'Chocolate Caramel',
        description: 'Chocolate dazzled with caramel'
      }
    ]

    this.donut = this.donuts[0]
  }
}
