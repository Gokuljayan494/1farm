import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmService } from '../farm.service';
import { productService } from '../service/productService';

@Component({
  selector: 'app-add-new-farm-house',
  templateUrl: './add-new-farm-house.component.html',
  styleUrls: ['./add-new-farm-house.component.css'],
})
export class AddNewFarmHouseComponent implements OnInit {
  // addNewTour = this.formBuilder.group({
  //   NoOfPersonsOccupy: [''],
  //   address: [''],
  //   description: [''],
  //   features: [''],
  //   // id: '636be9443d4480435bd8ed21',
  //   images: [''],
  //   name: [''],
  //   ownerEmail: [''],
  //   ownerPhone: [''],
  //   photo: [''],
  //   ratePerDay: [''],
  //   // __v: 2,
  //   // _id: '636be9443d4480435bd8ed21',
  // });
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private http: HttpClient,
    private productService: productService
  ) {}

  ngOnInit(): void {}

  onProductCreate(products: {
    name: String;
    images: String;
    NoOfPersonsOccupy: String;
    address: String;
    ownerEmail: String;
    ownerPhone: String;
    ratePerDay: String;
    description: String;
  }) {
    if (
      products.NoOfPersonsOccupy === '' ||
      products.address === '' ||
      products.description === '' ||
      products.images === '' ||
      products.name === '' ||
      products.ownerEmail === '' ||
      products.ownerPhone === '' ||
      products.ratePerDay === ''
    )
      alert('enter the propertys correctly');
    else {
      this.productService.createProduct(products);
    }
    console.log(products);
  }
}
