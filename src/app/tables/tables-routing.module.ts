import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';

const routes: Routes = [
  {path: "employee-information",
    component: EmployeeInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
