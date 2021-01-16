import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar,
              private router: Router,
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

}
