import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firberhome1Component } from './firberhome1.component';

describe('Firberhome1Component', () => {
  let component: Firberhome1Component;
  let fixture: ComponentFixture<Firberhome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firberhome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firberhome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
