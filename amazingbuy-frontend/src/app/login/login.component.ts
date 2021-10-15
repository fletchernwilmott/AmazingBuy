import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../service/account';
import { SignAccount } from '../service/sign-account';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private as: AccountService, private sa: SignAccount) {}


  signin:any={};
  myform:any={}
  submitted=false;

  ngOnInit(): void {
    console.log('hello');
  }
  
  
  onSubmit() {
    this.submitted = true;
    console.log('Email: ' + this.signin.email);
    console.log('Password: ' + this.signin.password);
    this.signIn(this.signin.email, this.signin.password);
  }

  onSuccessSigning(account:Account) {
    SignAccount. = true;
    console.log(account);
  }

  signIn(email:string, password:string) {
    this.as
      .getAccountByEmailAndPassword(email, password)
      .subscribe((res) => {
        this.onSuccessSigning(res);
      });
  }



}


