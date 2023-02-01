import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
