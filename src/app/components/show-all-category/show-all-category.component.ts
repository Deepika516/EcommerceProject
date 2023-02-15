import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-show-all-category',
  templateUrl: './show-all-category.component.html',
  styleUrls: ['./show-all-category.component.css'],
})
export class ShowAllCategoryComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toShowCategories();
  }

  toShowCategories() {
    this.categoryService
      .readAllCategory()
      .pipe(take(1))
      .subscribe((data: ICategory[]) => {
        this.categories = data;
      });
  }
}
