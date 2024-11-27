import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseTableComponent } from './warehouse-table/warehouse-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    WarehouseTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsmoduleModule
  ]
})
export class WarehouseMaintenanceModuleModule { }
