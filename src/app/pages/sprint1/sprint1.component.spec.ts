import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint1Component } from './sprint1.component';

describe('Sprint1Component', () => {
  let component: Sprint1Component;
  let fixture: ComponentFixture<Sprint1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
