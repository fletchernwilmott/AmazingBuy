import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrderViewComponent } from './seller-order-view.component';

describe('SellerOrderViewComponent', () => {
  let component: SellerOrderViewComponent;
  let fixture: ComponentFixture<SellerOrderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerOrderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
