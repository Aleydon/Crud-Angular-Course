import { Component, OnInit } from '@angular/core';

import { ProductService } from './services/product.service';
import { Product } from './model/product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product  = {
      "id": 23,
      "name": "Moto E 4 Plus",
      "price": 900.00
  }

  constructor(
              private productService: ProductService
  ) { }


  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.saveProduct('Product Created');
      this.productService.cancelProduct();
    });
  }

  cancelProduct(): void {
    this.productService.cancelProduct();
  }
}
