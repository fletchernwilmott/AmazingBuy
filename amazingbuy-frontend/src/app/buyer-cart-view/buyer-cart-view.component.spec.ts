import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerCartViewComponent } from './buyer-cart-view.component';

describe('BuyerCartViewComponent', () => {
  let component: BuyerCartViewComponent;
  let fixture: ComponentFixture<BuyerCartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerCartViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
