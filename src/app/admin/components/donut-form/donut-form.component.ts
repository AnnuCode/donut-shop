import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  handleSubmit(form: NgForm){
    if(form.valid){
      
      console.log(form.value)
    }else{
      form.form.markAllAsTouched()
    } 
    
    
    
  }
}
