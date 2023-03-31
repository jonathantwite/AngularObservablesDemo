import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  value: number = 0;
  valueObservable: Observable<number> = of(1);
  valueSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  valueSignal = signal(1);
  computedSignal = computed(() => this.valueSignal() + " + 1 = " + (this.valueSignal() + 1));
}
