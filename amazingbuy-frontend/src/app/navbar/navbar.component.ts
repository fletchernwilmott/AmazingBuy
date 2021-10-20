import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCall } from '../cart-call';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { AuthenticationService } from '../service/auth.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [CartCall],
})
export class NavbarComponent implements OnInit {
  productsQuantity!: number;
  signedAccount!: Account;
  // accountType: false,
  accountId: any = sessionStorage.getItem('id')
    ? sessionStorage.getItem('id')
    : 0;
  signedId: number = this.accountId;

  isSeller = false;
  isBuyer = false;

  constructor(
    private sharedDataService: CartCall,
    private os: OrderService,
    private as: AccountService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // this.productsQuantity = 5;
  }

  ngOnInit(): void {
    // this.sharedDataService.currentMessage.subscribe(
    //   (message) => (this.productsQuantity = message)
    // );
    // this.getProductsQuantityInCart();
    // setInterval(() => {
    //   this.getProductsQuantityInCart();
    // }, 5000);
    this.signInChecker(this.signedId);
  }
  signInChecker(id: number) {
    if (id === 0) {
      this.signedAccount!;
      this.isSeller = false;
      this.isBuyer = false;
    } else {
      this.as.getAccountById(id).subscribe((res) => {
        this.signedAccount = res;
        if (this.signedAccount.accountType.toLowerCase() === 'seller') {
          this.isSeller = true;
        } else {
          this.isBuyer = true;
        }
      });
    }
  }
  // getProductsQuantityInCart() {
  //   this.os.getAllOrders().subscribe((res) => {
  //     this.productsQuantity = res[res.length - 1]?.products.length;
  //     // console.log(res);
  //   });
  // }
  search() {}

  onSignInChanges() {
    //hide signin/signup
    //show myaccount dropdown & cart
  }
  onLogout() {
    this.authenticationService.logout();
    // this.router
    //   .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
    //   .then(() => {
    //     this.router.navigate(['navbar']);
    //   });
    window.location.replace('/home');
  }

  // updateCart() {}
}
