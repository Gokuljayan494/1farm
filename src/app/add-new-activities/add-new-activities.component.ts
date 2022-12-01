import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { productService } from '../service/productService';

@Component({
  selector: 'app-add-new-activities',
  templateUrl: './add-new-activities.component.html',
  styleUrls: ['./add-new-activities.component.css'],
})
export class AddNewActivitiesComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private http: HttpClient,
    private productService: productService
  ) {}

  ngOnInit(): void {}
  onProductCreate(products: {
    name: String;
    photo: String;
    description: String;
    additionCost: String;
  }) {
    if (localStorage.getItem('token')) {
      this.productService.createProduct1(products);
    } else {
      alert(`login first`);
      this.router.navigateByUrl('loginPage');
    }
    console.log(products);
  }
}
