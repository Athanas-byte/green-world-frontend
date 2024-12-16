import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WiphomeComponent } from './wipmodule/wiphome/wiphome.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'WIP',
    component: WiphomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryModuleRoutingModule { }
