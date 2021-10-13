import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TestAccount } from '../test-account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  }


  get diagnostic() { return JSON.stringify(this.testaccountb); }

}


