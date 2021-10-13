import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {
  submitted!: boolean;
  formProcess!: boolean;
  message!: string;

  token!: string;
  // number!: any;
  constructor(private http: HttpClient) {}
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

  chargeCard(token: any) {
    const headers = new HttpHeaders({ token: token, amount: '0.5' });
    this.http
      .post(
        'http://localhost:8080/payment/charge',
        { observe: 'response' },
        { headers: headers }
      )

      .subscribe((res) => console.log(res));
  }
}
