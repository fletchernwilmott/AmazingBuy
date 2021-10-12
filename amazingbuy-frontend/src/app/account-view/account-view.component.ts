import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  constructor( private as: AccountService) {

  }

  ngOnInit(): void {
    this.as.getAllAccounts().subscribe(res=>console.log(res))
  }

}
