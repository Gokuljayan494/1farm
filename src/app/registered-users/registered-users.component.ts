import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { products1 } from '../model/registered';
import { productService } from '../service/productService';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css'],
})
export class RegisteredUsersComponent implements OnInit {
  products: any;
  allProducts: products1[] = [];
  constructor(private service: productService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProduct1();
  }
  onProductFetch() {
    this.fetchProduct1();
  }
  private fetchProduct1() {
    this.service.fetchProduct1().subscribe((products) => {
      this.allProducts = products;
    });
  }
}
