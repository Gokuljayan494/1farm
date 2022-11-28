import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private httpClient: HttpClient) {}
  // viewAllTour() {
  //   const url =
  //     'https://farm-house-reubro-h1ua.onrender.com/api/v1/users/tours';
  //   return this.httpClient.get(url);
  // }
  // addProduct(productData: any) {
  //   const url =
  //     'https://farm-house-reubro-h1ua.onrender.com/api/v1/admin/addTour';
  //   return this.httpClient.post(url, productData);
  // }
  // editProduct(productId: any, productData: any) {
  //   console.log(`hello`);
  //   console.log(`hello ${productId}`);

  //   const url =
  //     'https://farm-house-reubro-h1ua.onrender.com/api/v1/admin/toursEdit/' +
  //     productId;
  //   return this.httpClient.put(url, productData);
  // }
}
