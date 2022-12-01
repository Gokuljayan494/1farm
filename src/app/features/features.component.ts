import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FarmService } from '../farm.service';
import { map } from 'rxjs/operators';
import { products11 } from '../model/activities';
import { Router, RouterLink } from '@angular/router';
import { productService } from '../service/productService';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  products: any;
  allProducts: products11[] = [];
  constructor(
    private farmService: FarmService,
    private http: HttpClient,
    private router: Router,
    private productService: productService
  ) {}
  delete() {}

  ngOnInit(): void {
    this.fetchProduct2();
  }
  onProductFetch() {
    this.fetchProduct2();
  }
  private fetchProduct2() {
    if (localStorage.getItem('token')) {
      this.productService.fetchProduct2().subscribe((products) => {
        this.allProducts = products;
        console.log(products);
      });
    } else {
      alert(`login first`);
    }
  }

  onDeleteProduct(id: String) {
    console.log(id);

    if (localStorage.getItem('token')) {
      this.productService.deleteFeatures(id);
      console.log(`id here ${id}`);
    } else {
      alert(`login first`);
    }
  }
}
