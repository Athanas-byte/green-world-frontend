import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './logistictables/orders/orders.component';
import { TripsoverviewComponent } from './logisticforms/tripsoverview/tripsoverview.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent
  },

  {
    path: 'trips',
    component: TripsoverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticsModuleRoutingModule { }
