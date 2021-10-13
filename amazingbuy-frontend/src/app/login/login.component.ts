import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TestAccount } from '../test-account';

import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private as: AccountService) {}


  testaccountb = new TestAccount('email@gmail.com', 'MyPassword');
  myform:any={}
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    console.log('hello');
  }
  
  
  onSubmit() {
    this.submitted = true;
    console.log('Email: ' + this.testaccountb.email);
    console.log('Password: ' + this.testaccountb.password);

    this.CheckAccount(this.testaccountb.email, this.testaccountb.password);
    AssignSignedAccount();
  }



  onSuccessSigning() {}

  signIn() {
    this.as
      .getAccountByEmailNPassword('rob@gmail.com', 'rob')
      .subscribe((res) => {
        // this.signedAccount = res;
        // console.log(this.signedAccount.);
        // this.getOrdersByAccountId(this.signedAccount.id);
      });
  }
}


