import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

    counter: number= 0;

  incrementBy(by:number) {
    this.counter +=by;
  }

  reset(val = 10){
    this.counter = val;
  }
}
