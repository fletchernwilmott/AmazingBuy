import { createR3ProviderExpression } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';
import { CartCall } from '../cart-call';
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
  providers: [ProductService, CartCall],
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
  newOrder = new Order();
  orders!: Order[];
  currentOrder!: Order;
  updatedOrder!: Order;

  date: string = `${new Date().getMonth()}${new Date().getDate()}${new Date().getFullYear()}`;

  durationInSeconds = 2;

  openSnackBar() {
    this._snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductService,
    private os: OrderService,
    private as: AccountService,
    private _snackBar: MatSnackBar,
    private sharedDataService: CartCall
  ) {}

  ngOnInit(): void {
    this.signIn();
    this.id = this.route.snapshot.params['id'];
    this.getProductById(this.id);
    this.getOrdersByAccountId(1);
  }

  signIn() {
    this.as
      .getAccountByEmailAndPassword('rob@gmail.edu', '1234')
      .subscribe((res) => {
        this.signedAccount = res;
        // console.log(this.signedAccount.);
      });
  }

  newOrderDetails() {
    this.newOrder.paid = false;
    this.newOrder.shipped = false;
    this.newOrder.shippingAddress = '';
    this.newOrder.timestamp = this.date;
    this.newOrder.account = this.signedAccount;
    this.newOrder.products = this.selectedProduct;
  }

  getProductById(id: number) {
    this.ps.findProductById(id).subscribe((res) => 
    {
      console.log(res);
      (this.product = res)
    });
  }

  onAddToCart(product: Product) {
    this.selectedProduct.push(product);
    // console.log(this.selectedProduct);
    this.currentOrder.paid === true
      ? this.createOrder(this.newOrder)
      : this.updateOrder(product);
    this.openSnackBar();
  }
  updateOrder(product: Product) {
    this.os.getOrderByTime(this.currentOrder.timestamp).subscribe((res) => {
      this.updatedOrder = res;
      this.updatedOrder.products.push(product);
      console.log(this.updatedOrder);
      this.sharedDataService.changeMessage(this.updatedOrder.products.length);
      this.os
        .updateOrder(this.updatedOrder.id, this.updatedOrder)
        .subscribe((res) => {
          // this.log(1);
          console.log(res);
        });
    });
  }

  getOrdersByAccountId(id: number) {
    this.os.findByAccountId(id).subscribe((res) => {
      this.orders = res;
      this.currentOrder = this.orders[this.orders.length - 1];
      console.log(this.currentOrder);
      // this.selectedProduct = this.currentOrder.products;
      // console.log(this.selectedProduct);
      // this.getProducts(this.orders);
      // this.sumOrdersPrice(this.unPaidProducts);
    });
  }

  createOrder(order: Order) {
    this.newOrderDetails();
    console.log(JSON.stringify(this.newOrder));
    this.os.createOrder(order).subscribe(
      (data) => console.log(data),
      (e) => console.log(e)
    );
  }
}
