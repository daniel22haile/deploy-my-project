import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { IProduct } from '../product-model/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy{
  products!: IProduct[] ;
  subscription !: Subscription;
  prod_id : any;
  constructor(private productService: ProductService, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {

    // list products
    this.subscription = this.productService
      .getProduct()
      .subscribe((res: any) => {
        console.log(res.products);
        this.products = res.products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
