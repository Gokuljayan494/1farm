import { Component, OnInit } from '@angular/core';
// import {far  } from "module";
import { FarmService } from './farm.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'farmhouse-admin';
  sideBarOpen = true;

  constructor(private farmService: FarmService) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  // onEditClicked(id: any) {
  //   // get product based on id
  //   let currentProduct = this.allProducts.find((e) => {
  //     return e.id === id;
  //   });
  //   console.log(currentProduct);

  //  populate the form with the product details
  // chage the button value to update product
}
// }
