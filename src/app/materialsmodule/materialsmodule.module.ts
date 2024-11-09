import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsmoduleRoutingModule } from './materialsmodule-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialsmoduleRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class MaterialsmoduleModule { }
