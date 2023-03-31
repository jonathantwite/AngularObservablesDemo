import { Component, Signal } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output5',
  templateUrl: './output5.component.html',
  styleUrls: ['./output5.component.scss']
})
export class Output5Component {
  constructor(private dataService: DataService){
    this.value = dataService.valueSignal;
    this.computedValue = dataService.computedSignal;
  }

  /* value stored as a signal object - no subscription required */
  value: Signal<number>;
  computedValue: Signal<string>;
}
