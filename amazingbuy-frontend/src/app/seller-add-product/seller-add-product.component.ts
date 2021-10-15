import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../service/product';
<<<<<<< HEAD
import { ProductService } from '../service/product.service';
=======
>>>>>>> 6163c9c127987b4eb9379dfa890f98919849c3a5

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  products!: Product[];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    
  }


  createProduct(product: Product) {}
  onAdd() {
    this.createProduct;
  }
}
