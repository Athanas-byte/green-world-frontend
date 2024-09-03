import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const routes: Routes = [
  {
    path: "user-card",
    component: UserCardComponent
  },

  {
    path: "profile-card",
    component: ProfileCardComponent
  }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
