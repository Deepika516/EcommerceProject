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
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  productData: any;
  productQuantity: number = 1;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartProduct: CartProductsService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('id');
    console.log(productId);
    productId &&
      this.productService
        .readProductById(+productId)
        .pipe(take(1))
        .subscribe((Result: IProduct[]) => {
          console.log(Result);
          this.productData = Result;
        });
  }

  removeProduct() {
    this.router.navigate(['allProducts']);
  }

  handleProductQuantity(value: string) {
    if (this.productQuantity < 25 && value === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value === 'minus') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      console.log(this.productData);
    }
  }
}
