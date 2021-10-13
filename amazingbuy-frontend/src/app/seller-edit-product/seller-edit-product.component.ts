import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.css'],
})
export class SellerEditProductComponent implements OnInit {
  product!: Product;
  constructor() {}

  ngOnInit(): void {}
  getProductById() {}
  onEdit() {}
  updateProduct() {}
}
