import { Component, OnInit } from '@angular/core';
import { Donut } from '../../model/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  onCreate(donut: Donut) {
    console.log(donut);
  }

  constructor(private donutService: DonutService){
    
  }

  ngOnInit(): void {
    const id = 'xcvsdf'
    this.donut = this.donutService.donuts.find((donut: Donut)=> donut.id === id) || {name:'', price:0, description:'', icon:''}
  }
}
