import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataModuleRoutingModule } from './masterdata-module-routing.module';
import { WarehouseMaintenanceModuleModule } from './warehouse-maintenance-module/warehouse-maintenance-module.module';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';
import { MaterdataHomeComponent } from './masterdata-home/materdata-home.component';
import { MachineryMaintenanceModuleModule } from './machinery-maintenance-module/machinery-maintenance-module.module';


@NgModule({
  declarations: [
    MaterdataHomeComponent
  ],
  imports: [
    CommonModule,
    MasterdataModuleRoutingModule,
    WarehouseMaintenanceModuleModule,
    MaterialsmoduleModule,
    MachineryMaintenanceModuleModule
  ]
})
export class MasterdataModuleModule { }
