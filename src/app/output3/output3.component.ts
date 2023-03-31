import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-output3',
  templateUrl: './output3.component.html',
  styleUrls: ['./output3.component.scss']
})
export class Output3Component implements OnDestroy {
  private subscription: Subscription;

  constructor(private dataService: DataService){
    this.subscription = dataService.valueSubject.asObservable().subscribe((result) => {
      this.value = result;
    });
  }

  value: number = 0;

  /* Must destroy subscriptions or memory leaks can occur */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
