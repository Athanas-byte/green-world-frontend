import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsmoduleRoutingModule } from './materialsmodule-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialsmoduleRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule
    
  ]
})
export class MaterialsmoduleModule { }
