import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IAmount, ICart } from 'src/app/interfaces/cart.interface';
import { IAddress, ICountry, IState } from 'src/app/interfaces/order.interface';
import { CartProductsService } from 'src/app/services/cart-products.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css'],
})
export class CheckoutOrderComponent implements OnInit {
  public orderDetailsForm!: FormGroup;
  constructor(
    private orderService: OrderDetailsService,
    private formBuilder: FormBuilder,
    private cartService: CartProductsService,
    private router: Router
  ) {}

  countries: ICountry[] = [];
  states: IState[] = [];
  orderDetails: ICart[] = [];
  subTotal: number | undefined;
  totalPrice: number | undefined;

  ngOnInit(): void {
    debugger;
    this.countries = this.orderService.contory();
    this.orderDetailsForm = this.formBuilder.group({
      country: [''],
      state: [''],
      address: [''],
      email: [''],
      contact: [''],
    });
    this.getCart();
  }

  onSubmit(form: NgForm) {
    debugger;
    const country = form.value.country;
    const state = form.value.state;
    const address = form.value.address;
    const email = form.value.email;
    const contact = form.value.contact;

    this.orderService
      .onSaveAddress(country, state, address, email, contact)
      .subscribe((respData: IAddress[]) => {
        console.log(respData);
      });
  }

  onChangeConutry(event: any) {
    debugger;
    let countryId = event.target.value;
    this.states = this.orderService.state().filter((e) => e.cid == countryId);
    console.log(this.states);
  }

  getCart() {
    this.cartService
      .getCartProducts()
      .pipe(take(1))
      .subscribe((cartData: ICart[]) => {
        this.orderDetails = cartData;
        let price = 0;
        cartData.forEach((item) => {
          price = price + +(item.price * item.quantity);
          console.log(price);
          this.subTotal = price;
          this.totalPrice = price + price / 5 + 100 - price / 10;
        });
        console.log(this.totalPrice);
      });
  }

  viewOrders() {
    this.router.navigate(['viewOrder']);
  }
}
