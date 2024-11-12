import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsRoutingModule } from './graphs-routing.module';
import { CashflowAnalyticalgraphComponent } from './cashflow-analyticalgraph/cashflow-analyticalgraph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';


@NgModule({
  declarations: [
    CashflowAnalyticalgraphComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    NgApexchartsModule,
    FormsModule,
    MaterialsmoduleModule
    
  ],

  exports: [
    CashflowAnalyticalgraphComponent,
    
    
  ]
})
export class GraphsModule { }
