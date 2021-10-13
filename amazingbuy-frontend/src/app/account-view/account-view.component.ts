import { Component, OnInit } from '@angular/core';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css'],
})
export class AccountViewComponent implements OnInit {
  accounts!: Account[];

  constructor(private as: AccountService) {}

  ngOnInit(): void {
    this.as.getAllAccounts().subscribe((res) => (this.accounts = res));
  }
}
