import { Component, OnInit } from '@angular/core';
import { ICountry, IState } from 'src/app/interfaces/cart.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css'],
})
export class CheckoutOrderComponent implements OnInit {
  constructor(private orderService: OrderDetailsService) {}

  countries: ICountry[] = [];
  states: IState[] = [];

  ngOnInit(): void {
    this.countries = this.orderService.contory();
  }

  onChangeConutry(event: any) {
    let countryId = event.target.value;
    this.states = this.orderService.state().filter((e) => e.cid === countryId);
    console.log(this.states);
  }
}
