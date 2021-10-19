import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  id!: number;
  constructor(private ps: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.id = this.route.snapshot.params['id'];
      this.idChecker();
    });
  }

  getAllProducts() {
    this.ps.getAllProducts().subscribe((res) => (this.products = res));
  }

  idChecker() {
    !this.id ? this.getAllProducts() : this.getProductsByCategoryId(this.id);
  }
  getProductsByCategoryId(id: number) {
    this.ps.findByCategoryId(id).subscribe((res) => (this.products = res));
  }

  searchByNameContaining(name: string) {
    this.ps
      .findByNameContaining(name)
      .subscribe((res) => (this.products = res));
  }

}
