import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../service/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  p!: Product;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.p = this.route.snapshot.params['id'];
  }

  handleCardClick(product: Product) {
    this.router.navigate(['productview', product.id]);
  }
}
