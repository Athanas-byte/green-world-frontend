import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    VehicleTableComponent,
    EquipmentTableComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class MachineryMaintenanceModuleModule { }
