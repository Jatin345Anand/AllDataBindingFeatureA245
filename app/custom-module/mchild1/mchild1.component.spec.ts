import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mchild1Component } from './mchild1.component';

describe('Mchild1Component', () => {
  let component: Mchild1Component;
  let fixture: ComponentFixture<Mchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
