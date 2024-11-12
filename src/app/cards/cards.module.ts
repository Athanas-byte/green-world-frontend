import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductPerformanceCardComponent } from './product-performance-card/product-performance-card.component';
import { MaterialsmoduleModule } from '../materialsmodule/materialsmodule.module';
import { ReplenishAlertCardComponent } from './replenish-alert-card/replenish-alert-card.component';
import { TotalInventoryCardComponent } from './total-inventory-card/total-inventory-card.component';
import { InventoryInTransitCardComponent } from './inventory-in-transit-card/inventory-in-transit-card.component';
import { DeliveryInCardComponent } from './delivery-in-card/delivery-in-card.component';
import { DeliveryOutCardComponent } from './delivery-out-card/delivery-out-card.component';
import { InventoryBigCardComponent } from './inventory-big-card/inventory-big-card.component';


@NgModule({
  declarations: [
    UserCardComponent,
    ProfileCardComponent,
    ProductPerformanceCardComponent,
    ReplenishAlertCardComponent,
    TotalInventoryCardComponent,
    InventoryInTransitCardComponent,
    DeliveryInCardComponent,
    DeliveryOutCardComponent,
    InventoryBigCardComponent,
  
    
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
    ProductPerformanceCardComponent,
    ReplenishAlertCardComponent,
    InventoryBigCardComponent
    
  ]
})
export class CardsModule { }
