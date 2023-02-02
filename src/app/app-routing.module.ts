import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/add-to-cart/cartDetails.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowAllCategoryComponent } from './components/show-all-category/show-all-category.component';
import { ShowAllProductsComponent } from './components/show-all-products/show-all-products.component';
import { SignupComponent } from './components/signup/signup.component';

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
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
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
  },
  {
    path: 'cartDetails',
    component: CartDetailsComponent,
  },
  {
    path: 'orderDetails',
    component: CheckoutOrderComponent,
  },
  {
    path: 'viewOrder',
    component: MyOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
