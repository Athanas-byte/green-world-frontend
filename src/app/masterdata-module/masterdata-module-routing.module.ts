import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseTableComponent } from './warehouse-maintenance-module/warehouse-table/warehouse-table.component';

const routes: Routes = [
  {
    path: 'warehouses',
    component: WarehouseTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataModuleRoutingModule { }
