import { Component, Input, OnInit } from '@angular/core';
import { CartCall } from '../cart-call';
import { Account } from '../service/account';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [CartCall],
})
export class NavbarComponent implements OnInit {
  productsQuantity!: number;
  signedAccount = {};
  // accountType: false,

  isSeller = true;

  constructor(private sharedDataService: CartCall, private os: OrderService) {
    // this.productsQuantity = 5;
  }

  ngOnInit(): void {
    // this.sharedDataService.currentMessage.subscribe(
    //   (message) => (this.productsQuantity = message)
    // );
    this.getProductsQuantityInCart();
    // setInterval(() => {
    //   this.getProductsQuantityInCart();
    // }, 5000);
  }

  getProductsQuantityInCart() {
    this.os.getAllOrders().subscribe((res) => {
      this.productsQuantity = res[res.length - 1]?.products.length;
      // console.log(res);
    });
  }
  search() {}

  onSignInChanges() {
    //hide signin/signup
    //show myaccount dropdown & cart
  }
  onLogout() {}

  // updateCart() {}
}
