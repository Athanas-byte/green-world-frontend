import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: "all-products", component: AllProductsComponent},
  {path: "orders", component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
