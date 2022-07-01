import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public subscription!: Subscription;
  products: any | null;
  items: any;
  constructor() {}

  ngOnInit() {
    this.products = localStorage.getItem('item-cart');
    this.items = JSON.parse(this.products);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
