import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { Order } from '../service/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {
  @Input() totalCost!: number;
  @Input() currentOrder!: Order;
  submitted!: boolean;
  formProcess!: boolean;
  message!: string;

  token!: string;
  // number!: any;
  constructor(private http: HttpClient, private os: OrderService) {}
  // handler: any = null;
  ngOnInit(): void {}

  chargeCreditCard() {
    let form = document.getElementsByTagName('form')[0];
    (<any>window).Stripe.card.createToken(
      {
        number: form.cardNumber.value,
        exp_month: form.expMonth.value,
        exp_year: form.expYear.value,
        cvc: form.cvc.value,
      },
      (status: number, res: any) => {
        if (status === 200) {
          this.chargeCard(res.id);
        } else {
          this.message = res.error.message;
        }
      }
    );
  }
  markOrderAsPaid() {
    this.currentOrder.paid = true;
    this.os.updateOrder(this.currentOrder.id, this.currentOrder).subscribe(
      (res) => {
        //feedback
      },
      (error: any) => console.log(error)
    );
  }
  chargeCard(token: any) {
    const headers = new HttpHeaders({
      token: token,
      amount: `${this.totalCost}`,
    });
    this.http
      .post(
        'http://localhost:8080/api/payment/charge',
        { observe: 'response' },
        { headers: headers }
      )
      .subscribe((res) => {
        this.markOrderAsPaid();
        console.log(res);
      });
  }
}
