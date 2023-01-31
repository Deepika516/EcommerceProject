import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showCategory();
  }

  showCategory() {
    this.categoryService
      .readAllCategory()
      .pipe(take(1))
      .subscribe((cat: ICategory[]) => {
        this.categories = cat;
        console.log(cat);
      });
  }

  readProducts() {
    this.router.navigate(['allProducts']);
  }
}
