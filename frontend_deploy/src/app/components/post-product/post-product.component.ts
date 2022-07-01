import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css'],
})
export class PostProductComponent implements OnInit, OnDestroy {
  productForm!: UntypedFormGroup;
  subscription !: Subscription;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private router : Router
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productname: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(productForm : UntypedFormGroup) {
    if (productForm.valid) {
      this.subscription = this.productService
        .postProduct(productForm.value)
        .subscribe((res: any) => {
         localStorage.setItem('PRODUCTS', JSON.stringify(res))
         this.router.navigate(['/product-list']);
          console.log(res);
        });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
