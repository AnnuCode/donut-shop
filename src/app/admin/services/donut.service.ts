import { Injectable } from '@angular/core';
import { Donut } from '../model/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];
  constructor() {}

  read() {
    return this.donuts;
  }
  readOne(id: string) {
    const donut = this.donuts.find((donut: Donut) => donut.id === id);
    if (donut) {
      return donut;
    }
    return { name: '', price: 0, description: '', icon: '' };
  }
  create(payload: Donut) {
    // this.donuts = [...this.donuts, payload]
    this.donuts.push(payload);
    console.log(this.donuts);
  }
  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts)
  }
  delete(payload: Donut){
    this.donuts = this.donuts.filter((donut:Donut)=> donut.id !== payload.id)
    console.log(this.donuts)
  }
}
//the service has a state now which can be used by different components
