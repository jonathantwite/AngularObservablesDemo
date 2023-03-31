import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component {

  constructor(private dataService: DataService){
    this.value = this.dataService.value;
  }
  value: number = 0;
}
