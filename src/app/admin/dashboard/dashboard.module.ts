import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GraphsModule } from 'src/app/graphs/graphs.module';
import { CardsModule } from 'src/app/cards/cards.module';


@NgModule({
  declarations: [
    HomeComponent,
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    GraphsModule,
    CardsModule
  ]
})
export class DashboardModule { }
