import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubsidiaryTableComponent } from './subsidiary-tables-module/subsidiary-table/subsidiary-table.component';

const routes: Routes = [
  {
    path: 'subsidiary',
    component: SubsidiaryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsidiaryMaintenamceModuleRoutingModule { }
