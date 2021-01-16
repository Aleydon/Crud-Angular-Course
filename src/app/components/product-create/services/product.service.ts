import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Product } from './../model/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:3333/products';


  constructor(private snackbar: MatSnackBar,
              private router: Router,
              private http: HttpClient,
    ) { }


  saveProduct(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }


  cancelProduct():void {
    this.router.navigate(['/products']); 
   }


  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}
