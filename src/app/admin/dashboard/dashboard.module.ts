import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { GraphsModule } from 'src/app/graphs/graphs.module';
import { CardsModule } from 'src/app/cards/cards.module';
import { PieChartsModuleModule } from 'src/app/pie-charts-module/pie-charts-module.module';
import { TablesModule } from 'src/app/tables/tables.module';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';


@NgModule({
  declarations: [
    HomeComponent,
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialsmoduleModule,
    GraphsModule,
    CardsModule,
    PieChartsModuleModule,
    TablesModule
  ]
})
export class DashboardModule { }
