import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  addCartProducts(
    title: string,
    img: string,
    price: number,
    quantity: number
  ): Observable<ICart> {
    return this.http.post<ICart>('http://localhost:3005/addToCart', {
      title: title,
      img: img,
      price: price,
      quantity: quantity,
    });
  }

  getCartProducts(): Observable<ICart[]> {
    return this.http.get<ICart[]>('http://localhost:3005/getCartProducts');
  }

  deleteCartProduct(id: number): Observable<ICart[]> {
    return this.http.delete<ICart[]>(
      `http://localhost:3005/getCartProducts/${id}`
    );
  }

  deleteCartProducts(): Observable<ICart[]> {
    return this.http.delete<ICart[]>('http://localhost:3005/getCartProducts');
  }
}
