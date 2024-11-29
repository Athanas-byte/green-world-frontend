import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsidiaryMaintenamceModuleRoutingModule } from './subsidiary-maintenamce-module-routing.module';
import { SubsidiaryTablesModuleModule } from './subsidiary-tables-module/subsidiary-tables-module.module';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubsidiaryMaintenamceModuleRoutingModule,
    SubsidiaryTablesModuleModule,
    MaterialsmoduleModule
  ]
})
export class SubsidiaryMaintenamceModuleModule { }
