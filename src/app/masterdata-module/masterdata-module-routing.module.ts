import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseTableComponent } from './warehouse-maintenance-module/warehouse-table/warehouse-table.component';
import { MaterdataHomeComponent } from './masterdata-home/materdata-home.component';

const routes: Routes = [
  {
    path: 'warehouses',
    component: WarehouseTableComponent
  },
  
  {
    path: 'home',
    component: MaterdataHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataModuleRoutingModule { }
