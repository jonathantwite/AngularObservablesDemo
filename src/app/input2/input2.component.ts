import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss']
})
export class Input2Component implements OnDestroy {
  private subscription: Subscription;
  
  constructor(private dataService: DataService){
    this.subscription = dataService.valueObservable.subscribe((result) => {
      this.value = result;
    });
  }
 
  value: number = 0;

  valueChanged(e: Event){
    /* Can't update an observable */
  }
  
  /* Must destroy subscriptions or memory leaks can occur */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
