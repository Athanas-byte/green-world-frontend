import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffrecordsComponent } from './staffrecords/staffrecords.component';
import { StaffjourneyComponent } from './staffjourney/staffjourney.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';
import { StaffcompensationComponent } from './staffcompensation/staffcompensation.component';
import { CareerstableComponent } from './careerstable/careerstable.component';

@NgModule({
  declarations: [
    StaffrecordsComponent,
    StaffjourneyComponent,
    StaffcompensationComponent,
    CareerstableComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class StafftablesModule { }
