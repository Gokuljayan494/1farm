import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { map } from 'rxjs/operators';
import { products } from '../model/products';
import { Router, RouterLink } from '@angular/router';
import { productService } from '../service/productService';

@Component({
  selector: 'app-farm-tour',
  templateUrl: './farm-tour.component.html',
  styleUrls: ['./farm-tour.component.css'],
})
export class FarmTourComponent implements OnInit {
  products: any;
  allProducts: products[] = [];
  constructor(
    private farmService: FarmService,
    private http: HttpClient,
    private router: Router,
    private productService: productService
  ) {}
  delete() {}

  ngOnInit(): void {
    // this.farmService.viewAllTour().subscribe((data) => {
    //   console.log(data);
    //   this.products = data;
    // });
    this.fetchProduct();
  }
  onProductFetch() {
    this.fetchProduct();
  }
  private fetchProduct() {
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
    });
  }

  onDeleteProduct(id: String) {
    this.productService.deleteProduct(id);
    console.log(`id here ${id}`);
  }
}
