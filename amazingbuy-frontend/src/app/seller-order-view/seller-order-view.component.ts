import { Component, OnInit } from '@angular/core';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-seller-order-view',
  templateUrl: './seller-order-view.component.html',
  styleUrls: ['./seller-order-view.component.css'],
})
export class SellerOrderViewComponent implements OnInit {
  orders!: Order[];
  price!: number;
  totalCost: number[] = [];
  constructor(private os: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders() {
    this.os.getAllOrders().subscribe((res) => {
      this.orders = res;
      this.getProductsPerOrder(this.orders);
    });
  }

  updateOrder(order: Order) {
    this.os.updateOrder(order.id, order).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
  getProductsPerOrder(orders: Order[]) {
    if (orders) {
      let products = orders.map((o) => o.products);
      console.log(products);
      products.forEach((p) => this.sumOrdersPrice(p));
    }
  }
  onSubmit(order: Order) {
    let updatedOrder = order;
    updatedOrder.shipped = true;
    this.updateOrder(updatedOrder);
  }

  sumOrdersPrice(products: Product[]) {
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    let priceList: number[] = [];
    products.map((p) => priceList.push(p.productPrice));
    console.log(priceList);
    //console.log(priceList.reduce(reducer));
    this.totalCost.push(priceList.reduce(reducer));
    console.log(this.totalCost);
  }
}
