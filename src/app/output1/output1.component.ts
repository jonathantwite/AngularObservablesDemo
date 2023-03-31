import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.scss']
})
export class Output1Component implements OnChanges {
  constructor(private dataService: DataService){}

  value: number = 0;
  
  /* I don't know when this is called */
  ngOnChanges(e: SimpleChanges) {
    console.log("ngOnChanges", e);
    this.value = this.dataService.value;
  }
}
