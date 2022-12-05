import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../model/donut.model';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css'],
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = [
    'caramel-swirl',
    'just-chocolate',
    'sour-supreme',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value); //why are we using 'this' keyword here? To be able to execute the create to the instance of the DonutFormComponent class.
    } else {
      form.form.markAllAsTouched();
    }
  }
  handleUpdate(form: NgForm){
    if(form.valid){
      this.update.emit({id: this.donut.id, ...form.value})
    }else{
      form.form.markAllAsTouched()
    }
  }
  handleDelete(){
    if(confirm(`Are you sure you want to delete ${this.donut.name}?`)){
      this.delete.emit({...this.donut})
    }
    
  }
}
