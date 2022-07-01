import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentHandler: any = null;
  totalPrice: any;
  success: boolean = false;
  failure: boolean = false;
  visiblity: any = false;
  message: any = null;

  addressData: any;
  public subscription!: Subscription;
  paymentForm!: UntypedFormGroup;

  public data: any;
  public getpricedata: any;

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private payService: ProductService
  ) {}

  ngOnInit() {
    this.invokeStripe();

    this.paymentForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });

    //data retriving from localStorage
    this.data = localStorage.getItem('item-cart');
    this.getpricedata = JSON.parse(this.data);
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LFoSND6uXP4DamIMeS9ixBDdUZMZA4FyIfjG3j0JldXh8B0k2WJU5oftsEsrUK3iWdng8jFOjkzuoI2TUxgorJ400yXWe18M0',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.payService.makePayment(stripeToken).subscribe((data: any) => {
        console.log('data client side stripe', data);
        if (data.data === 'success') {
          //!RL - FOR SUCCESS - HERE
          // this.router.navigate(['/success']);

          this.success = true;
        } else {
          //URL FOR FAILURE - HERE
          this.router.navigate(['/failure']);

          this.failure = true;
        }
      });
    };

    paymentHandler.open({
      name: 'Daniel (MSD)',
      description: "Daniel's (MSD) Final Project with Stripe payment options",
      amount: amount * 100,
    });

    this.router.navigate(['/success']);
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LFoSND6uXP4DamIMeS9ixBDdUZMZA4FyIfjG3j0JldXh8B0k2WJU5oftsEsrUK3iWdng8jFOjkzuoI2TUxgorJ400yXWe18M0',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(`stripe token`, stripeToken);
            // alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  calculateTotalPrice() {
    return this.getpricedata.price * this.getpricedata.quantity;
  }

  submitForm() {}
}
