import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  category: ICategory[] = [];
  ngOnInit(): void {}

  onRead() {
    this.router.navigate(['allCategory']);
  }
}
