import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsModuleRoutingModule } from './logistics-module-routing.module';
import { LogistictablesModule } from './logistictables/logistictables.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogisticsModuleRoutingModule,
    LogistictablesModule
  ]
})
export class LogisticsModuleModule { }
