import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerCartViewComponent } from './buyer-cart-view/buyer-cart-view.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
