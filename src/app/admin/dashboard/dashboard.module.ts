import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { EmployeesComponent } from './employees/employees.component';
import { MatIconModule } from '@angular/material/icon';
import { GraphsModule } from 'src/app/graphs/graphs.module';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeesComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    GraphsModule
  ]
})
export class DashboardModule { }
