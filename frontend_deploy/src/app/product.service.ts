import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { StripeService } from 'ngx-stripe';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IAddress, IProduct } from './components/product-model/product.model';




@Injectable()
export class ProductService {
  product!: IProduct;
  items = [];

  private PROODUCT_URL = 'http://localhost:8080/product';
  private CHARGE_URL = 'http://localhost:8080/payment/charge';
  private CHARGE_STATUS_URL = 'http://localhost:8080/payment/charge/status';
  private ORDER_ADDRESS = 'http://localhost:8080/order/address';
  private PAYMENT_URL = 'http://localhost:8080/payment';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private stripeService: StripeService // private stripeService: StripeService
  ) {}

  postProduct(obj: IProduct[]): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${this.PROODUCT_URL}/${'add'}`, obj);
  }

  getProduct(): Observable<any> {
    return this.http.get<IProduct[]>(this.PROODUCT_URL);
  }

  getOneProductDetails(prod_id: IProduct) {
    console.log('se_id', prod_id);
    return this.http.get<IProduct>(`${this.PROODUCT_URL}/` + prod_id);
  }

  postOrderAddress(obj: IAddress): Observable<IAddress> {
    return this.http.post<IAddress>(this.ORDER_ADDRESS, obj);
  }

  //STRIPE PAYMENT SECTION //

  getToken(body: any) {
    return this.stripeService.createToken(body.kcard, body.name);
  }

  postToken(body: any) {
    return this.http.post(this.CHARGE_URL, body);
  }

  //get bill information
  makePayment(stripeToken: any): Observable<any> {
    return this.http.post<any>(this.PAYMENT_URL, { token: stripeToken });
  }

  
}
