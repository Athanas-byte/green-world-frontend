import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';
import { EmployeeRemunerationsComponent } from './employee-remunerations/employee-remunerations.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';


@NgModule({
  declarations: [
    AvailableEmployeesComponent,
    EmployeeRemunerationsComponent,
    EmployeeProfilesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
