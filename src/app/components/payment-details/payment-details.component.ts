import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IRecipt } from 'src/app/interfaces/order.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  paymentDetails: IRecipt = {
    id: '',
    country: '',
    state: '',
    address: '',
    email: '',
    contact: 0,
    subtotal: 0,
    tax: 0,
    discount: 0,
    deliverycharges: 0,
    total: 0,
  };
  constructor(private orderservice: OrderDetailsService) {}

  ngOnInit(): void {
    this.viewPayment();
  }

  viewPayment() {
    this.orderservice
      .orderInvoice()
      .pipe(take(1))
      .subscribe((payment: IRecipt) => {
        console.log(payment);
        this.paymentDetails = payment;
      });
  }
}
