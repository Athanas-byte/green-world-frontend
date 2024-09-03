import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmployeeRemunerationComponent } from './employee-remuneration/employee-remuneration.component';

@NgModule({
  declarations: [
    EmployeeInformationComponent,
    EmployeeRemunerationComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  
  ],

  exports: [
    EmployeeInformationComponent
  ]
})
export class TablesModule { }
