import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { CartProductsService } from 'src/app/services/cart-products.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: any;

  productQuantity: number = 1;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartProduct: CartProductsService
  ) {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('id');
    productId &&
      this.productService
        .readProductById(+productId)
        .pipe(take(1))
        .subscribe((Result: IProduct[]) => {
          this.productData = Result;
        });
  }

  // fetching details from route and then use that detail in api so that we get specific product details

  removeProduct() {
    this.router.navigate(['allProducts']);
  }

  checkOrder() {
    this.router.navigate(['checkDetails']);
  }

  // to update quantity if user wants more they can update and vice versa
  handleProductQuantity(value: string) {
    if (this.productQuantity < 25 && value === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value === 'minus') {
      this.productQuantity -= 1;
    }
  }

  // adding this updated quantity in cart
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
    }
  }
}
