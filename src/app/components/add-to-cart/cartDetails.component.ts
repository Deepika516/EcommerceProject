import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IAmount, ICart } from 'src/app/interfaces/cart.interface';
import { CartProductsService } from 'src/app/services/cart-products.service';

@Component({
  selector: 'app-cartDetails',
  templateUrl: './cartDetails.component.html',
  styleUrls: ['./cartDetails.component.css'],
})
export class CartDetailsComponent implements OnInit {
  CartDetails: ICart[] = [];
  cartSummary: IAmount = {
    price: 0,
    tax: 0,
    deliveryCharges: 0,
    discount: 0,
    total: 0,
  };
  productQuantity: number = 1;
  constructor(private cartService: CartProductsService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService
      .getCartProducts()
      .pipe(take(1))
      .subscribe((cartData: ICart[]) => {
        this.CartDetails = cartData;
        let price = 0;
        cartData.forEach((item) => {
          price = price + +(item.price * item.quantity);
          console.log(price);
        });
        this.cartSummary.price = price;
        this.cartSummary.discount = price / 10;
        this.cartSummary.tax = price / 5;
        this.cartSummary.deliveryCharges = 100;
        this.cartSummary.total =
          this.cartSummary.price +
          this.cartSummary.discount +
          this.cartSummary.tax +
          this.cartSummary.deliveryCharges;
        console.log(this.cartSummary);
      });
  }
}