import { Component, OnInit } from '@angular/core';

export interface ProductElements {
  productId: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

@Component({
  selector: 'app-seller-stock-view',
  templateUrl: './seller-stock-view.component.html',
  styleUrls: ['./seller-stock-view.component.css']
})
export class SellerStockViewComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'productPrice', 'productQuantity', 'add-stock'];

  ELEMENT_DATA: ProductElements[] = [
    {productId: 1, productName: 'Hydrogen', productPrice: 1.00, productQuantity: 10},
    {productId: 2, productName: 'Helium', productPrice: 4.00, productQuantity: 10},
    {productId: 3, productName: 'Lithium', productPrice: 6.99, productQuantity: 10},
    {productId: 4, productName: 'Beryllium', productPrice: 9.01, productQuantity: 10},
    {productId: 5, productName: 'Boron', productPrice: 10.81, productQuantity: 10},
    {productId: 6, productName: 'Carbon', productPrice: 12.01, productQuantity: 10},
    {productId: 7, productName: 'Nitrogen', productPrice: 14.00, productQuantity: 10},
    {productId: 8, productName: 'Oxygen', productPrice: 15.99, productQuantity: 10},
    {productId: 9, productName: 'Fluorine', productPrice: 18.94, productQuantity: 10},
    {productId: 10, productName: 'Neon', productPrice: 20.17, productQuantity: 10},
  ];
  
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
