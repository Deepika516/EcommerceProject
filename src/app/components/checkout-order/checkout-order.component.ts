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

  cartSummary: IAmount = {
    price: 0,
    tax: 0,
    deliveryCharges: 0,
    discount: 0,
    total: 0,
  };

  ngOnInit(): void {
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
    const country = form.value.country;
    const state = form.value.state;
    const address = form.value.address;
    const email = form.value.email;
    const contact = form.value.contact;

    this.orderService
      .onSaveAddress(country, state, address, email, contact)
      .subscribe((respData: IAddress[]) => {});
  }

  onChangeConutry(event: any) {
    let countryId = event.target.value;
    this.states = this.orderService.state().filter((e) => e.cid == countryId);
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
        });
        this.cartSummary.price = price;
        this.cartSummary.discount = price / 10;
        this.cartSummary.tax = price / 5;
        this.cartSummary.deliveryCharges = 100;
        this.cartSummary.total = price + price / 5 + 100 - price / 10;
      });
  }

  viewOrders() {
    alert('order has been successfully register');
    this.router.navigate(['myOrder']);
  }

  viewCoupons() {
    this.router.navigate(['allCoupons']);
  }
}
