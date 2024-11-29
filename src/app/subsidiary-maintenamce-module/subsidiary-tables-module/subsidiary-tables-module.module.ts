import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsidiaryTableComponent } from './subsidiary-table/subsidiary-table.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    SubsidiaryTableComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class SubsidiaryTablesModuleModule { }
