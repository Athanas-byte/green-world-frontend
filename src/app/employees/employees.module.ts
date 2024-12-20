import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeeRemunerationsComponent } from './employee-remunerations/employee-remunerations.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';
import { TablesModule } from '../tables/tables.module';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [
    
    EmployeeRemunerationsComponent,
    EmployeeProfilesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TablesModule,
    CardsModule

  ]
})
export class EmployeesModule { }
