import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WiphomeComponent } from './wiphome/wiphome.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    WiphomeComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class WipmoduleModule { }
