import { createR3ProviderExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../service/account';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-buyer-product-view',
  templateUrl: './buyer-product-view.component.html',
  styleUrls: ['./buyer-product-view.component.css'],
  providers: [ProductService],
})
export class BuyerProductViewComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 5, rows: 4, color: '' },
    { text: 'Two', cols: 5, rows: 4, color: '' },
    { text: 'Three', cols: 2, rows: 2, color: '' },
  ];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  product!: Product;
  id!: number;
  selectedProduct: Product[] = [];
  signedAccount!: Account;
  // newOrder: Order = [
  //   2,
  //   false,
  //   false,
  //   'null',
  //   new Date(),
  //   // this.signedAccount,
  //   1,
  //   this.selectedProduct,
  // ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductService,
    private os: OrderService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getProductById(this.id);
  }

  getProductById(id: number) {
    this.ps.findProductById(id).subscribe((res) => (this.product = res));
  }

  onAddToCart(product: Product) {
    this.selectedProduct.push(product);
    console.log(this.selectedProduct);
  }

  createOrder(order: Order) {
    this.os.createOrder(order);
  }
}
