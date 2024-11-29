import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffrecordsComponent } from './stafftables/staffrecords/staffrecords.component';
import { StaffjourneyComponent } from './stafftables/staffjourney/staffjourney.component';
import { StaffcompensationComponent } from './stafftables/staffcompensation/staffcompensation.component';
import { CareerstableComponent } from './stafftables/careerstable/careerstable.component';


const routes: Routes = [

  {
    path: "staffrecords",
    component: StaffrecordsComponent
  },

  {
    path: "staffjourney",
    component: StaffjourneyComponent
  },

  {
    path: "staffcompensation",
    component: StaffcompensationComponent
  },

  {
    path: "careers",
    component: CareerstableComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceModuleRoutingModule { }
