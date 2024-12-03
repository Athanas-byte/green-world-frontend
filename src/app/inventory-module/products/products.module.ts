import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialsmoduleModule } from 'src/app/materialsmodule/materialsmodule.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MaterialsmoduleModule
  ]
})
export class ProductsModule { }
