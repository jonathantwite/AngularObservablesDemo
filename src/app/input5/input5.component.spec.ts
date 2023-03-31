import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input5Component } from './input5.component';

describe('Input5Component', () => {
  let component: Input5Component;
  let fixture: ComponentFixture<Input5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Input5Component]
    });
    fixture = TestBed.createComponent(Input5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
