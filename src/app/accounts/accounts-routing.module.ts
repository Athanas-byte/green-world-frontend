import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: "expenses", component: ExpensesComponent},
  {path: "income", component: IncomeComponent},
  {path: "summary", component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
