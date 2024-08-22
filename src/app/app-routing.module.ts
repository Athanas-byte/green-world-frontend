import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { 
    path: "header", 
    component: HeaderComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: "admin", 
    canActivate: [AuthGuard], 
    data: { role: "Admin" },
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule)
  },
  {
    path: "employees",
    loadChildren: () =>
      import("./employees/employees.module"). then((m) => m.EmployeesModule)
  },
  {path: "accounts",
    loadChildren: () =>
      import("./accounts/accounts.module"). then((m) => m.AccountsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
