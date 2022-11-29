import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AuthCookie } from '../shared/services/auth-cookies-handler';
import { products } from '../model/products';

@Injectable({ providedIn: 'root' })
export class productService {
  constructor(private http: HttpClient, private router: Router) {}

  //   create product

  createProduct(products: {
    name: String;
    images: String;
    NoOfPersonsOccupy: String;
    address: String;
    ownerEmail: String;
    ownerPhone: String;
    ratePerDay: String;
    description: String;
  }) {
    const headers = new HttpHeaders({ myHeader: 'reubro' });

    this.http
      .post(
        `https://farm-house-reubro.onrender.com/api/v1/admin/addTour`,
        products,
        { headers }
      )
      .subscribe((data) => {
        console.log(data);

        alert(`new tour added`);
        this.router.navigateByUrl('dashboard');
      });
  }

  //   fetch one product

  fetchProduct() {
    return this.http
      .get<{ [key: string]: products }>(
        'https://farm-house-reubro.onrender.com/api/v1/admin/tours'
      )
      .pipe(
        map((res) => {
          console.log(res[`data`]);
          res = res[`data`][`tours`];
          const products = [];
          for (const key in res) {
            console.log(`--------------`);

            console.log(key);

            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], _id: key });
              console.log(products);
            }
          }
          return products;
        })
      );
  }
  deleteProduct(id: String) {
    this.http
      .delete(
        'https://farm-house-reubro.onrender.com/api/v1/admin/deleteTour/' +
          id +
          ''
      )
      .subscribe((data) => {
        alert(`tour deleted`);
        this.router.navigateByUrl('dashboard');
      });
  }
  onLogin(data: any) {
    console.log(`${(data.email, data.password)}`);
    let login = 'login';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${data.token}`,
    });
    this.http
      .post<any>(
        'https://farm-house-reubro.onrender.com/api/v1/admin/login ',
        data,
        { headers }
      )
      .subscribe((res) => {
        console.log(res);
        console.log(`-------------`);
        localStorage.setItem('token', res.token);
        if (!res) {
          console.log(res);
          alert('check admin email and password');
        }
        alert(`sucessfully logged in`);
        this.router.navigateByUrl('dashboard');
      });
  }
  fetchProduct1() {
    return this.http
      .get<{ [key: string]: products }>(
        'https://farm-house-reubro.onrender.com/api/v1/users/getUsers'
      )
      .pipe(
        map((res: any) => {
          console.log(res[`data`]);
          res = res[`users`];
          const products = [];
          for (const key in res) {
            console.log(`--------------`);

            console.log(key);

            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], _id: key });
              console.log(products);
            }
          }
          return products;
        })
      );
  }
}
