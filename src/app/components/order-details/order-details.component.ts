import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IOrder } from 'src/app/interfaces/order.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderData: IOrder = {
    id: 0,
    product: '',
    price: 0,
    status: '',
    image: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let orderId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(orderId);
    orderId &&
      this.orderService
        .onViewOrderDetail(+orderId)
        .pipe(take(1))
        .subscribe((detail: IOrder) => {
          console.log(detail);
          this.orderData = detail;
          console.log(this.orderData);
        });
  }
}
