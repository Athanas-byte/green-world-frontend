import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashflowAnalyticalgraphComponent } from './cashflow-analyticalgraph/cashflow-analyticalgraph.component';

const routes: Routes = [

  {path: "cashflow-analyticalgraph",
    component: CashflowAnalyticalgraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
