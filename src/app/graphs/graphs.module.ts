import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsRoutingModule } from './graphs-routing.module';
import { CashflowAnalyticalgraphComponent } from './cashflow-analyticalgraph/cashflow-analyticalgraph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { ProductDistributionGraphComponent } from './product-distribution-graph/product-distribution-graph.component';
import { CounterpartyPiechartComponent } from './counterparty-piechart/counterparty-piechart.component';
import { SalesPiechartComponent } from './sales-piechart/sales-piechart.component';


@NgModule({
  declarations: [
    CashflowAnalyticalgraphComponent,
    ProductDistributionGraphComponent,
    CounterpartyPiechartComponent,
    SalesPiechartComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    NgApexchartsModule,
    FormsModule
    
  ],

  exports: [
    CashflowAnalyticalgraphComponent,
    ProductDistributionGraphComponent,
    CounterpartyPiechartComponent,
    SalesPiechartComponent
  ]
})
export class GraphsModule { }
