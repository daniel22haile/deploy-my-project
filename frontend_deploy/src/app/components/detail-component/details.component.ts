import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { IProduct } from '../product-model/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public prod_id: any;
  public productdetails!: IProduct;
  public subscription!: Subscription;


  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('activatedRoute: ', this.activatedRoute);

    this.prod_id = this.activatedRoute.snapshot.paramMap.get('prod_id');
    console.log('id = ', this.prod_id);
    this.subscription = this.productService
      .getOneProductDetails(this.prod_id)
      .subscribe((res: any) => {
        this.productdetails = res.products;
      });
  }

  sendToCart(): void {

    let objectToSend = {
          id: this.prod_id,
          productname: this.productdetails.productname,
          price: this.productdetails.price,
          quantity: this.productdetails.quantity,
          description: this.productdetails.description,
    };
    console.log('Object data: ', objectToSend);
    this.router.navigateByUrl('/add-to-cart', {
    });
    localStorage.setItem('item-cart', JSON.stringify(objectToSend));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
