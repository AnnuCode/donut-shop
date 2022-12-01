import { Component } from '@angular/core';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent {
  onCreate(donut: Donut){
    console.log(donut)
  }
}
