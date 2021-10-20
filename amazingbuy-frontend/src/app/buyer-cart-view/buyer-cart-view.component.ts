import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export interface ProductElements {
  productId: number;
  productName: string;
  productPrice: number;
}

@Component({
  selector: 'app-buyer-cart-view',
  templateUrl: './buyer-cart-view.component.html',
  styleUrls: ['./buyer-cart-view.component.css'],
})
export class BuyerCartViewComponent implements OnInit {
  constructor(private os: OrderService, private modalService: BsModalService) {}
  orders!: Order[];
  currentOrder!: Order;
  unPaidProducts: Product[] = [];
  totalCost!: number;
  modalRef!: BsModalRef;
  updatedProducts!: Product[];
  id: any = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : '1';
  signedId: number = this.id;
  ngOnInit(): void {
    this.getOrdersByAccountId(this.signedId);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getOrdersByAccountId(id: number) {
    this.os.getAllOrders().subscribe((res) => {
      this.orders = res.filter((o) => o.paid === false);
      this.currentOrder = this.orders[this.orders.length - 1];
      // console.log(this.orders[this.orders.length - 1]);
      this.getProducts(this.currentOrder);
      this.sumOrdersPrice(this.unPaidProducts);
    });
  }

  getProducts(orders: Order) {
    this.unPaidProducts = [];
    orders.products.map((i) => {
      i ? this.unPaidProducts.push(i) : console.log('product not found');
    });
    // console.log(this.unPaidProducts);
  }
  sumOrdersPrice(products: Product[]) {
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    let priceList: number[] = [];
    products.map((p) => priceList.push(p.productPrice));
    // console.log(priceList);
    // console.log(priceList.reduce(reducer));
    this.totalCost = priceList.reduce(reducer);
  }

  onRemove(product: Product) {
    this.updatedProducts = this.unPaidProducts.filter((p) => p !== product);
    this.currentOrder.products = this.updatedProducts;
    this.os.updateOrder(this.currentOrder.id, this.currentOrder).subscribe(
      (res) => {
        this.getOrdersByAccountId(1);
      },
      (error: any) => console.log(error)
    );
  }
}
