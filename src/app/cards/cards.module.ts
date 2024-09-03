import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    UserCardComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule
  ],

  exports: [
    UserCardComponent,
    ProfileCardComponent
  ]
})
export class CardsModule { }
