import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private as: AccountService) {}

  ngOnInit(): void {}

  onSuccessSigning() {}

  signIn() {
    this.as
      .getAccountByEmailNPassword('rob@gmail.com', 'rob')
      .subscribe((res) => {
        // this.signedAccount = res;
        console.log(res);
        // this.getOrdersByAccountId(this.signedAccount.id);
      });
  }
}
