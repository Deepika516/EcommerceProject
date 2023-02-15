import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private router: Router) {}

  readAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3004/categories');
  }
}
