import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
})
export class CategoryProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // debugger;
    // let categoryName =
    //   this.activatedRoute.snapshot.paramMap.get('categoryTitle');
    // console.log(categoryName);
    // this.productService
    //   .readProductByCategory(categoryName!)
    //   .pipe(take(1))
    //   .subscribe((category: IProduct[]) => {
    //     console.log(category);
    //   });
  }
}
