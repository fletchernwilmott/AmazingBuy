import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

export interface ProductElements {
  productId: number;
  productName: string;
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
  products!: Product[];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ps.getAllProducts().subscribe((res) => (this.products = res));
  }

  updateProduct(product: Product) {
    this.ps.updateProduct(product.id, product).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
  onSubmit(p: Product) {
    console.log(p.productQuantity);
    this.updateProduct(p);
  }
}
