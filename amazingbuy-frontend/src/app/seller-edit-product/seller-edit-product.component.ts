import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.css'],
  providers: [ProductService],
})
export class SellerEditProductComponent implements OnInit {
  product!: Product;
  
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProductById(1);
  }


  // move this to seller order view

  getProductById(id: number){
    this.ps
    .findProductById(id)
    .subscribe((res) => this.product = res);
  }

  onEdit(){}
  updateProduct(){}

}

