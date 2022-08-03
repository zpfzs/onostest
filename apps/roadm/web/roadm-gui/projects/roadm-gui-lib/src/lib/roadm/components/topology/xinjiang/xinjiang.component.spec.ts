import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinjiangComponent } from './xinjiang.component';

describe('XinjiangComponent', () => {
  let component: XinjiangComponent;
  let fixture: ComponentFixture<XinjiangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinjiangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinjiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
