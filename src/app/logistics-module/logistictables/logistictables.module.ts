import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class LogistictablesModule { }
