import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsoverviewComponent } from './tripsoverview/tripsoverview.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    TripsoverviewComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class LogisticformsModule { }
