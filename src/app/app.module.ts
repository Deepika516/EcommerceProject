import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShowAllCategoryComponent } from './components/show-all-category/show-all-category.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { CartDetailsComponent } from './components/add-to-cart/cartDetails.component';
import {
  GridModule,
  PagerModule,
  EditService,
} from '@syncfusion/ej2-angular-grids';
import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ShowAllCouponsComponent } from './components/show-all-coupons/show-all-coupons.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CategoryComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    ShowAllCategoryComponent,
    ShowAllProductsComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutOrderComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent,
    InvoiceComponent,
    ShowAllCouponsComponent,
    CategoryProductsComponent,
    CouponsComponent,
    AllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    GridModule,
    PagerModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [EditService],
  bootstrap: [AppComponent],
})
export class AppModule {}
