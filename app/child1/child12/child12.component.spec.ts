import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child12Component } from './child12.component';

describe('Child12Component', () => {
  let component: Child12Component;
  let fixture: ComponentFixture<Child12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
