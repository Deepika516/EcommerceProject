import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress, IOrder, IRecipt } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor(private http: HttpClient) {}

  contory() {
    return [
      { id: 11, countryName: 'India' },
      { id: 12, countryName: 'USA' },
      { id: 13, countryName: 'Australia' },
    ];
  }

  state() {
    return [
      { id: 1, cid: 11, stateName: 'Punjab' },
      { id: 2, cid: 11, stateName: 'Haryana' },
      { id: 3, cid: 12, stateName: 'Alaska' },
      { id: 4, cid: 12, stateName: 'Hawaii' },
      { id: 5, cid: 13, stateName: 'Victoria' },
      { id: 6, cid: 13, stateName: 'Queensland' },
    ];
  }

  onSaveAddress(
    country: string,
    state: string,
    address: string,
    email: string,
    contact: number
  ): Observable<IAddress[]> {
    return this.http.post<IAddress[]>('http://localhost:3006/saveAddress', {
      countryName: country,
      stateName: state,
      address: address,
      email: email,
      contact: contact,
    });
  }

  orderInvoice(): Observable<IRecipt> {
    return this.http.get<IRecipt>('http://localhost:3006/orderInvoice');
  }

  onViewOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://localhost:3006/myOrder');
  }

  onViewOrderDetail(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(`http://localhost:3006/myOrder/${id}`);
  }
}
