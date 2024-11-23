import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeRemunerationsComponent } from './employee-remunerations/employee-remunerations.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';

const routes: Routes = [

  {path: "employee-remunerations", component: EmployeeRemunerationsComponent},
  {path: "employee-profiles", component: EmployeeProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
