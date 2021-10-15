import { Component, OnInit } from '@angular/core';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';
import { Product } from '../service/product';

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
  displayedColumns: string[] = [
    'productId',
    'productName',
    'productPrice',
    'remove',
  ];

  ELEMENT_DATA: ProductElements[] = [
    { productId: 1, productName: 'Laptop', productPrice: 1.0 },
    { productId: 2, productName: 'Mouse', productPrice: 4.0 },
    { productId: 3, productName: 'Potato', productPrice: 6.99 },
    { productId: 4, productName: 'Carrot', productPrice: 9.01 },
    { productId: 5, productName: 'Jeans', productPrice: 10.81 },
    { productId: 6, productName: 'Shampoo', productPrice: 12.01 },
    { productId: 7, productName: 'Headphones', productPrice: 14.0 },
    { productId: 8, productName: 'Videogame', productPrice: 15.99 },
    { productId: 9, productName: 'Game Tickets', productPrice: 18.94 },
    { productId: 10, productName: 'Socks', productPrice: 20.17 },
  ];

  dataSource = this.ELEMENT_DATA;

  constructor(private os: OrderService) {}
  orders!: Order[];
  filteredOrders!: Order[];
  unPaidProducts: Product[] = [];
  totalCost!: number;

  ngOnInit(): void {
    this.getOrdersByAccountId(1);
  }

  getOrdersByAccountId(id: number) {
    this.os.getAllOrders().subscribe((res) => {
      this.orders = res.filter((o) => o.paid === false);
      console.log(this.orders);
      this.getProducts(this.orders);
      this.sumOrdersPrice(this.unPaidProducts);
    });
  }

  getProducts(orders: Order[]) {
    orders.map((p) =>
      p.products.map((i) => {
        i ? this.unPaidProducts.push(i) : console.log('product not found');
      })
    );
    console.log(this.unPaidProducts);
  }
  sumOrdersPrice(products: Product[]) {
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    let priceList: number[] = [];
    products.map((p) => priceList.push(p.productPrice));
    console.log(priceList);
    console.log(priceList.reduce(reducer));
    this.totalCost = priceList.reduce(reducer);
  }

  onRemove(order: Order) {
    console.log(order);
    this.os.cancelOrder(order.id).subscribe((res) => {
      console.log(res);
      this.getOrdersByAccountId(1);
    });
  }
}
