import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css'],
})
export class EditTourComponent implements OnInit {
  productId: any;
  productData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private farmService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      // this.productId = ;
    });
  }
  updateProduct(form: any) {
    let updateProduct = {
      NoOfPersonsOccupy: form.value.NoOfPersonsOccupy,
      address: form.value.address,
      description: form.value.description,
      features: form.value.features,
      // id: '636be9443d4480435bd8ed21',
      images: form.value.images,
      name: form.value.name,
      ownerEmail: form.value.ownerEmail,
      ownerPhone: form.value.ownerPhone,
      photo: form.value.photo,
      ratePerDay: form.value.ratePerDay,
    };

    // this.farmService
    //   .editProduct(this.productId, this.productData)
    //   .subscribe((data: any) => {
    //     this.router.navigateByUrl('');
    //   });
  }
}
