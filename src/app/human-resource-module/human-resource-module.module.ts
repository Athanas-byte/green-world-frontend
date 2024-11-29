import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceModuleRoutingModule } from './human-resource-module-routing.module';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';
import { StafftablesModule } from './stafftables/stafftables.module';
import { StaffformsModule } from './staffforms/staffforms.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HumanResourceModuleRoutingModule,
    StafftablesModule,
    StaffformsModule,
    MaterialsmoduleModule
    
  ]
})
export class HumanResourceModuleModule { }
