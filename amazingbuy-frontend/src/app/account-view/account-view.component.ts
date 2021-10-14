import { Component, OnInit } from '@angular/core';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
})
export class AccountViewComponent implements OnInit {
  accounts!: Account[];
  signedAccount!: Account;

  constructor(private as: AccountService, private os: OrderService) {}

  ngOnInit(): void {
    this.signIn();
    // this.getOrdersByAccountId(this.signedAccount.id);
  }
  getAllAccounts() {
    this.as.getAllAccounts().subscribe((res) => (this.accounts = res));
  }
  //this method will be moved to signIn-view
  signIn() {
    this.as
      .getAccountByEmailAndPassword('rob@gmail.com', 'rob')
      .subscribe((res) => {
        this.signedAccount = res;
        // console.log(this.signedAccount.);
        this.getOrdersByAccountId(this.signedAccount.id);
      });
  }
  getAccountById() {}
  getOrdersByAccountId(id: number) {
    this.os
      .findByAccountId(id)
      .subscribe((res) =>
        console.log(`Account 1 orders: ${JSON.stringify(res)}`)
      );
  }
}
