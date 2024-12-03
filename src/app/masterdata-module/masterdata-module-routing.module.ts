import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseTableComponent } from './warehouse-maintenance-module/warehouse-table/warehouse-table.component';
import { MaterdataHomeComponent } from './masterdata-home/materdata-home.component';
import { EquipmentTableComponent } from './machinery-maintenance-module/equipment-table/equipment-table.component';
import { VehicleTableComponent } from './machinery-maintenance-module/vehicle-table/vehicle-table.component';

const routes: Routes = [
  {
    path: 'warehouses',
    component: WarehouseTableComponent
  },

  {
    path: 'equipment',
    component: EquipmentTableComponent
  },

  {
    path: 'vehicles',
    component: VehicleTableComponent
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
