import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
//import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    SummaryComponent,
    ExpensesComponent,
    IncomeComponent,
    //CashFlowComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    NgApexchartsModule
  ]
})
export class AccountsModule { }
