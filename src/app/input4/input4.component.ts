import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input4',
  templateUrl: './input4.component.html',
  styleUrls: ['./input4.component.scss']
})
export class Input4Component implements OnDestroy {
  private subscription: Subscription;
  
  constructor(private dataService: DataService) {
    /* Convert to observable to subscribe to */
    this.subscription = dataService.valueSubject.asObservable().subscribe((result) => {
      this.value = result;
    });
  }

  value: number = 0;

  valueChanged(e:Event) {
    /* Can pass new values to a Subject */
    this.dataService.valueSubject.next(this.value);
  }

  /* Must destroy subscriptions or memory leaks can occur */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
