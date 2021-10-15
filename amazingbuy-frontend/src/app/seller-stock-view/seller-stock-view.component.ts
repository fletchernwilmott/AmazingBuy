import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

export interface ProductElements {
  id: number;
  name: string;
  productPrice: number;
  productQuantity: number;
}

@Component({
  selector: 'app-seller-stock-view',
  templateUrl: './seller-stock-view.component.html',
  styleUrls: ['./seller-stock-view.component.css'],
  providers: [ProductService],
})
export class SellerStockViewComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    productPrice: new FormControl(),
    productQuantity: new FormControl()
  });

  products!: Product[];


  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public onSubmit(): void{

  }

  getAllProducts(){
    this.ps.getAllProducts().subscribe((res) => (this.products = res));
  }

}
