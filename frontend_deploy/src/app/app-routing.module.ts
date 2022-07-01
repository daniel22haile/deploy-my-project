import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared-component/home/home.component';
import { LoginComponent } from './auth-componts/login/loginform.component';
import { SignupComponent } from './auth-componts/signup/signupform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './components/detail-component/details.component';
import { CartComponent } from './cart-component/cart/cart.component';
import { PaymentComponent } from './payment-component/payment.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PageNotFoundComponent } from './components/error.component/notfound.component';
import { ProductListComponent } from './components/productList/product-list.component';
import { SuccessComponent } from './payment-component/success.component';
import { HttpClientModule } from '@angular/common/http';
import { FailureComponent } from './payment-component/failure.component';

// import { SuccessComponent } from './payment-component/success.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-products', component: PostProductComponent },
  { path: 'product-detail/:prod_id', component: ProductDetailComponent },
  { path: 'add-to-cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path : 'success', component: SuccessComponent},
  { path : 'failure', component: FailureComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],

  //Guards are here in providers
  providers: [ProductService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
