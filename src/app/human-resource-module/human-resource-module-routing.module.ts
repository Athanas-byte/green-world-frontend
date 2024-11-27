import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffrecordsComponent } from './stafftables/staffrecords/staffrecords.component';
import { StaffjourneyComponent } from './stafftables/staffjourney/staffjourney.component';


const routes: Routes = [

  {
    path: "staffrecords",
    component: StaffrecordsComponent
  },

  {
    path: "staffjourney",
    component: StaffjourneyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceModuleRoutingModule { }
