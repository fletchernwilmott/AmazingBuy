import { Component, OnInit } from '@angular/core';
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

  constructor(private ps: ProductService) {
    this.ps.getAllProducts().subscribe((data) => {
      data.forEach((element) => {
        this.products.push(element.name);
      });
    });
  }

  ngOnInit(): void {}
  handleClick(p: Product) {
    console.log(p);
  }
}
