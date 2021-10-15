import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountViewComponent } from './account-view/account-view.component';
import { BuyerCartViewComponent } from './buyer-cart-view/buyer-cart-view.component';
import { BuyerProductViewComponent } from './buyer-product-view/buyer-product-view.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerOrderViewComponent } from './seller-order-view/seller-order-view.component';
import { SellerStockViewComponent } from './seller-stock-view/seller-stock-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: ProductListComponent },
  { path: 'home/:id', component: ProductListComponent },
  { path: 'productview/:id', component: BuyerProductViewComponent },
  { path: 'cart', component: BuyerCartViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'account', component: AccountViewComponent },
  { path: 'orders', component: SellerOrderViewComponent },
  { path: 'stock', component: SellerStockViewComponent },
  { path: 'addproduct', component: SellerAddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
