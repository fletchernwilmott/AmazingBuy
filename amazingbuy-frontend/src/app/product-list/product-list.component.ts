import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
// import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ps.getAllProducts().subscribe((res) => (this.products = res));
  }

  searchByNameContaining(name: string) {
    this.ps
      .findByNameContaining(name)
      .subscribe((res) => (this.products = res));
  }
}
