import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Output2Component } from './output2.component';

describe('Output2Component', () => {
  let component: Output2Component;
  let fixture: ComponentFixture<Output2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Output2Component]
    });
    fixture = TestBed.createComponent(Output2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
