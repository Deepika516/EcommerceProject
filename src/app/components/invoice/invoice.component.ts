import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IRecipt } from 'src/app/interfaces/order.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  constructor(private orderDetails: OrderDetailsService) {}
  invoiceDetails: IRecipt = {
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
  ngOnInit(): void {
    this.viewInvoice();
  }

  viewInvoice() {
    this.orderDetails
      .orderInvoice()
      .pipe(take(1))
      .subscribe((invoice: IRecipt) => {
        this.invoiceDetails = invoice;
      });
  }
}
