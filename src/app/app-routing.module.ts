import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/add-to-cart/cartDetails.component';
import { ShowAllCouponsComponent } from './components/show-all-coupons/show-all-coupons.component';

import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';

import { ShowAllCategoryComponent } from './components/show-all-category/show-all-category.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';

import { CategoryProductsComponent } from './components/category-products/category-products.component';

import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () =>
      import('./components/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/category/category.module').then(
        (n) => n.CategoryModule
      ),
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
    path: '',
    loadChildren: () =>
      import('./components/coupons/coupons.module').then(
        (m) => m.CouponsModule
      ),
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
