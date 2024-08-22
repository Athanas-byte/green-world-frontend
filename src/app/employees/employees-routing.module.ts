import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';
import { EmployeeRemunerationsComponent } from './employee-remunerations/employee-remunerations.component';
import { EmployeeProfilesComponent } from './employee-profiles/employee-profiles.component';

const routes: Routes = [
  {path: "available-employees", component: AvailableEmployeesComponent},
  {path: "employee-remuneration", component: EmployeeRemunerationsComponent},
  {path: "employee-profiles", component: EmployeeProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
