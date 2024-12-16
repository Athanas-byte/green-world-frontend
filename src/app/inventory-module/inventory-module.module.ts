import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryModuleRoutingModule } from './inventory-module-routing.module';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';
import { ProductsModule } from './products/products.module';
import { WipmoduleModule } from './wipmodule/wipmodule.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InventoryModuleRoutingModule,
    MaterialsmoduleModule,
    ProductsModule,
    WipmoduleModule
  ]
})
export class InventoryModuleModule { }
