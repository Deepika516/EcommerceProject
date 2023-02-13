import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/add-to-cart/cartDetails.component';
import { ShowAllCouponsComponent } from './components/show-all-coupons/show-all-coupons.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowAllCategoryComponent } from './components/show-all-category/show-all-category.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'allCategory',
    component: ShowAllCategoryComponent,
  },
  {
    path: 'allProducts',
    component: ShowAllProductsComponent,
  },
  {
    path: 'allProducts/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cartDetails',
    component: CartDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkDetails',
    component: CheckoutOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'myOrder',
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'allOrders',
    component: AllOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'myOrder/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkPayment',
    component: PaymentDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkInvoice',
    component: InvoiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'allCoupons',
    component: ShowAllCouponsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'coupons',
    component: CouponsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:category',
    component: CategoryProductsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
