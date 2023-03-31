import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Output5Component } from './output5.component';

describe('Output5Component', () => {
  let component: Output5Component;
  let fixture: ComponentFixture<Output5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Output5Component]
    });
    fixture = TestBed.createComponent(Output5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
