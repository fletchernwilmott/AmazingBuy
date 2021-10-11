import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOrderViewComponent } from './buyer-order-view.component';

describe('BuyerOrderViewComponent', () => {
  let component: BuyerOrderViewComponent;
  let fixture: ComponentFixture<BuyerOrderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerOrderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
