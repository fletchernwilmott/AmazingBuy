import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStockViewComponent } from './seller-stock-view.component';

describe('SellerStockViewComponent', () => {
  let component: SellerStockViewComponent;
  let fixture: ComponentFixture<SellerStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerStockViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
