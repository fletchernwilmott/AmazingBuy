import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private as: AccountService) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  newAccount= new Account();
  myForm:any={}
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {}

  onAddAccount() {
    
    console.log('Full Name: '+ this.newAccount.fullName);
    console.log('Email: ' + this.newAccount.email);
    console.log('Password: ' + this.newAccount.password);
    console.log('dateOfBirth: ' + this.newAccount.dateOfBirth);
    console.log('Account Type: ' + this.newAccount.accountType);

    this.createAccount(
      this.newAccount.fullName,
      this.newAccount.email,
      this.newAccount.password,
      this.newAccount.dateOfBirth,
      this.newAccount.accountType
    );

  }

  createAccount(
    name:string, 
    email:string, 
    password:string, 
    dateOfBirth:string, 
    accountType:string) 
    {
      this.as.createAccount(this.newAccount);
    }
}
