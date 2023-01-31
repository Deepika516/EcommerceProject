import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css'],
})
export class ShowAllProductsComponent implements OnInit {
  products: IProduct[] = [];
  productDetails: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onShowProducts();
  }

  onShowProducts() {
    debugger;
    this.productService
      .readAllProducts()
      .pipe(take(1))
      .subscribe((res: IProduct[]) => {
        this.products = res;
        console.log(res);
      });
  }

  onShowProductById(event: IProduct) {
    let prodId = event.id;
    this.productService
      .readProductById(prodId)
      .pipe(take(1))
      .subscribe((proRes: IProduct[]) => {
        console.log(proRes);
        this.productDetails = proRes.filter((e) => e.id === prodId);
        console.log(this.productDetails);
      });
  }
}
