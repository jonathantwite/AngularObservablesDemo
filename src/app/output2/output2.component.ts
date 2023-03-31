import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-output2',
  templateUrl: './output2.component.html',
  styleUrls: ['./output2.component.scss']
})
export class Output2Component implements OnDestroy {
  private subscription: Subscription;
  
  constructor(private dataService: DataService){
    this.subscription = dataService.valueObservable.subscribe((result) => {
      this.value = result;
    });
  }
 
  value: number = 0;
  
  /* Must destroy subscriptions or memory leaks can occur */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
