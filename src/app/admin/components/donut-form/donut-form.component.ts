import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent {

  @Output() create = new EventEmitter<Donut>()

  icons: string[] = [
    'caramel-swirl',
    'just-chocolate',
    'sour-supreme',
    'vanilla-sundae',
    'zesty-lemon'
  ]

  handleSubmit(form: NgForm){
    if(form.valid){
      
      this.create.emit(form.value)
    }else{
      form.form.markAllAsTouched()
    } 
    
    
    
  }
}
