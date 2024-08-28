import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';


@NgModule({
  declarations: [
    EmployeeInformationComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
