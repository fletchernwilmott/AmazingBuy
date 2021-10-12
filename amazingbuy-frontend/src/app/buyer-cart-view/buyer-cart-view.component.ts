import { Component, OnInit } from '@angular/core';

export interface ProductElements {
  productId: number;
  productName: string;
  productPrice: number;
}

@Component({
  selector: 'app-buyer-cart-view',
  templateUrl: './buyer-cart-view.component.html',
  styleUrls: ['./buyer-cart-view.component.css']
})
export class BuyerCartViewComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'productPrice', 'remove'];

  ELEMENT_DATA: ProductElements[] = [
    {productId: 1, productName: 'Laptop', productPrice: 1.00},
    {productId: 2, productName: 'Mouse', productPrice: 4.00},
    {productId: 3, productName: 'Potato', productPrice: 6.99},
    {productId: 4, productName: 'Carrot', productPrice: 9.01},
    {productId: 5, productName: 'Jeans', productPrice: 10.81},
    {productId: 6, productName: 'Shampoo', productPrice: 12.01},
    {productId: 7, productName: 'Headphones', productPrice: 14.00},
    {productId: 8, productName: 'Videogame', productPrice: 15.99},
    {productId: 9, productName: 'Game Tickets', productPrice: 18.94},
    {productId: 10, productName: 'Socks', productPrice: 20.17},
  ];
  
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
