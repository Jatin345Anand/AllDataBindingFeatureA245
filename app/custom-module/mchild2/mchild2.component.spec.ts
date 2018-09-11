import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mchild2Component } from './mchild2.component';

describe('Mchild2Component', () => {
  let component: Mchild2Component;
  let fixture: ComponentFixture<Mchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
