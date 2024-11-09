import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductPerformanceCardComponent } from './product-performance-card/product-performance-card.component';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';


@NgModule({
  declarations: [
    UserCardComponent,
    ProfileCardComponent,
    ProductPerformanceCardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MaterialsmoduleModule
  ],

  exports: [
    UserCardComponent,
    ProfileCardComponent,
    ProductPerformanceCardComponent
  ]
})
export class CardsModule { }
