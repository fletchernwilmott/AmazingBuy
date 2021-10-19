import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [ProductService],
})
export class SearchbarComponent implements OnInit {
  products: string[] = [];
  searchText!: string;
  show: boolean = false;

  lastkeydown1: number = 0;
  subscription: any;
  userList1: any;

  constructor(private ps: ProductService) {
    this.ps.getAllProducts().subscribe((data) => {
      data.forEach((element) => {
        this.products.push(element.name);
      });
    });
  }

  ngOnInit(): void {}
  // handleClick(p: Product) {
  // }

  getUserIdsFirstWay($event: any) {
    let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay'))
      .value;
    this.userList1 = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.products, userId);
      }
    }
  }

  searchFromArray(arr: any, regex: any) {
    let matches = [],
      i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
        console.log(matches);
      }
    }
    return matches;
  }
}
