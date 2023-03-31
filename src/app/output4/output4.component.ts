import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output4',
  templateUrl: './output4.component.html',
  styleUrls: ['./output4.component.scss']
})
export class Output4Component {
  constructor(private dataService: DataService){
    this.value$ = dataService.valueSubject.asObservable()
  }

  /* Value stored as an observable - no subscription required */
  value$: Observable<number>;
}
