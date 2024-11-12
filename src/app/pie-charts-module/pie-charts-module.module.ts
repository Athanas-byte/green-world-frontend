import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartsModuleRoutingModule } from './pie-charts-module-routing.module';
import { CatalogueChartComponent } from './catalogue-chart/catalogue-chart.component';
import { DealsChartComponent } from './deals-chart/deals-chart.component';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';
import { CounterpartiesChartComponent } from './counterparties-chart/counterparties-chart.component';


@NgModule({
  declarations: [
    CatalogueChartComponent,
    DealsChartComponent,
    CounterpartiesChartComponent
  ],
  imports: [
    CommonModule,
    PieChartsModuleRoutingModule,
    MaterialsmoduleModule
  ],

  exports: [
    DealsChartComponent,
    CounterpartiesChartComponent,
    CatalogueChartComponent

  ]
})
export class PieChartsModuleModule { }
