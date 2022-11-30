import { Component } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent {
  icons: string[] = [
    'caramel-swirl',
    'just-chocolate',
    'sour-supreme',
    'vanilla-sundae',
    'zesty-lemon'
  ]
}
