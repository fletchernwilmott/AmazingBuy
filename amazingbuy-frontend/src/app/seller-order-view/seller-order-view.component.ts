import { Component, OnInit } from '@angular/core';

export interface OrderElements {
  orderId: number;
  customerId: number;
  productPrice: number;
}

@Component({
  selector: 'app-seller-order-view',
  templateUrl: './seller-order-view.component.html',
  styleUrls: ['./seller-order-view.component.css']
})
export class SellerOrderViewComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'customerId', 'productPrice', 'ship', 'cancel'];

  ELEMENT_DATA: OrderElements[] = [
    {orderId: 1, customerId: 23, productPrice: 1.00},
    {orderId: 2, customerId: 23, productPrice: 4.00},
    {orderId: 3, customerId: 23, productPrice: 6.99},
    {orderId: 4, customerId: 23, productPrice: 9.01},
    {orderId: 5, customerId: 23, productPrice: 10.81},
    {orderId: 6, customerId: 23, productPrice: 12.01},
    {orderId: 7, customerId: 23, productPrice: 14.00},
    {orderId: 8, customerId: 23, productPrice: 15.99},
    {orderId: 9, customerId: 23, productPrice: 18.94},
    {orderId: 10, customerId: 23, productPrice: 20.17},
  ];
  
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
