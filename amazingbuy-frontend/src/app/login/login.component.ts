// import { Component, OnInit } from '@angular/core';
// import { AccountService } from '../service/account.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   constructor(private as: AccountService) {}

//   ngOnInit(): void {}

//   onSuccessSigning() {}

//   signIn() {
//     this.as
//       .getAccountByEmailNPassword('rob@gmail.com', 'rob')
//       .subscribe((res) => {
//         // this.signedAccount = res;
//         console.log(res);
//         // this.getOrdersByAccountId(this.signedAccount.id);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../service/account';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private as: AccountService) {}
  signin: any = {};
  myForm: any = {};
  submitted = false;

  ngOnInit(): void {
    console.log('hello');
  }
  onSubmit(): void {
    this.submitted = true;
    console.log('Email: ' + this.signin);
    // console.log('Password: ' + this.signin.Password);
    this.signIn(this.signin);
  }
  onSuccessSigning(account: Account) {
    //SignAccount. = true;
    console.log('Success!');
  }
  signIn(signIn: any) {
    try {
      this.as.signIn(signIn).subscribe((res) => {
        // this.onSuccessSigning(res);
        console.log(res);
        // sessionStorage.setItem('token');
      });
    } catch (error) {
      this.onFaliureSigning();
    }
  }
  onFaliureSigning(): void {
    console.log('This is wrong');
  }
}
