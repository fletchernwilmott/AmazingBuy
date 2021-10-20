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
import { SignedAccount } from '../service/signed-account';
import { AuthenticationService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private as: AccountService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  signin: any = {};
  myForm: any = {};
  submitted = false;
  signedAccount!: SignedAccount;

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
        this.signedAccount = res;
        console.log(this.signedAccount.accessToken);
        this.authenticationService.setSignedAccount(
          this.signedAccount.id,
          this.signedAccount.accessToken
        );
        // this.router
        //   .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
        //   .then(() => {
        //     this.router.navigate(['home']);
        //   });
        window.location.replace('/home');
        // this.router.navigate(['home']);
      });
    } catch (error) {
      this.onFaliureSigning();
    }
  }
  onFaliureSigning(): void {
    console.log('This is wrong');
  }
}
