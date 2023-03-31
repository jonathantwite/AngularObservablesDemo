import { Component, Signal, WritableSignal } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input5',
  templateUrl: './input5.component.html',
  styleUrls: ['./input5.component.scss']
})
export class Input5Component {
  constructor(private dataService: DataService){
    this.value = dataService.valueSignal;
  }

  value: WritableSignal<number>;

  valueChanged(e: Event) {
    const newValue = Number.parseInt((e.target as HTMLTextAreaElement).value); /* NASTY - what if I want to swap to a custom control? */
    
    /* Can call .set() on local version and it propagates back to the service instance */
    this.value.set(newValue);
  }
}
