import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IOrder, IRecipt } from 'src/app/interfaces/order.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orders: IOrder[] = [];
  constructor(private orderService: OrderDetailsService) {}

  ngOnInit(): void {
    this.myOrders();
  }

  orderDetail() {
    this.orderService
      .orderdetails()
      .pipe(take(1))
      .subscribe((invoice: IRecipt[]) => {
        console.log(invoice);
      });
  }

  myOrders() {
    this.orderService
      .onViewOrders()
      .pipe(take(1))
      .subscribe((order: IOrder[]) => {
        console.log(order);
        this.orders = order;
      });
  }
}
