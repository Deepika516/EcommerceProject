import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  readAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3003/prods');
  }

  readProductById(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3003/prods/${id}`);
  }

  readProductByCategory(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `http://localhost:3003/products/${category}`
    );
  }
}
