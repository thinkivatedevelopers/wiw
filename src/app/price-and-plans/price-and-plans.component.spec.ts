import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndPlansComponent } from './price-and-plans.component';

describe('PriceAndPlansComponent', () => {
  let component: PriceAndPlansComponent;
  let fixture: ComponentFixture<PriceAndPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAndPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAndPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
