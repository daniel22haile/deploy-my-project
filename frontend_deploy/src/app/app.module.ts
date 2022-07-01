import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { NgxStripeModule } from 'ngx-stripe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth-componts/login/loginform.component';
import { SignupComponent } from './auth-componts/signup/signupform.component';
import { SignupService } from './auth-componts/signup/signupform.service';
import { LoginService } from './auth-componts/login/loginform.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/detail-component/details.component';
import { CartComponent } from './cart-component/cart/cart.component';
import { PaymentComponent } from './payment-component/payment.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { ProductListComponent } from './components/productList/product-list.component';
import { PageNotFoundComponent } from './components/error.component/notfound.component';
import { SuccessComponent } from './payment-component/success.component';
import { FailureComponent } from './payment-component/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PostProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    PageNotFoundComponent,
    PaymentComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(
      'pk_test_51KHZmsE1etkdUIOly1epV6If0sukIE41upRqJow411rOJXeBpQzJJ0UeLhqfJKT6ur473ZFvpLowqbXhC8aywKKz00w88lOlb7'
    ),

    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [SignupService, LoginService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
