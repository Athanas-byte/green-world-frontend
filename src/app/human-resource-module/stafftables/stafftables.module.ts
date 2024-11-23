import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffrecordsComponent } from './staffrecords/staffrecords.component';
import { StaffjourneyComponent } from './staffjourney/staffjourney.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';

@NgModule({
  declarations: [
    StaffrecordsComponent,
    StaffjourneyComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class StafftablesModule { }
