import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProductViewComponent } from './buyer-product-view.component';

describe('BuyerProductViewComponent', () => {
  let component: BuyerProductViewComponent;
  let fixture: ComponentFixture<BuyerProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
