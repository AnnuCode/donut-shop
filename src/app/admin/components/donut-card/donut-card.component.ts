import { Component, Input } from '@angular/core';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-card',
  templateUrl: './donut-card.component.html',
  styleUrls: ['./donut-card.component.css']
})
export class DonutCardComponent {
  @Input() donut!: Donut
}
