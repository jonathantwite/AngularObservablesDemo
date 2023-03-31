import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Output4Component } from './output4.component';

describe('Output4Component', () => {
  let component: Output4Component;
  let fixture: ComponentFixture<Output4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Output4Component]
    });
    fixture = TestBed.createComponent(Output4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
