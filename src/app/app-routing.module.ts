import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { MainlayoutComponent } from './layout/app_layout/mainlayout/mainlayout.component';
import { AuthlayoutComponent } from './layout/app_layout/authlayout/authlayout.component';
import { CardsModule } from './cards/cards.module';

const routes: Routes = [
  { 
    path: "", 
    component: MainlayoutComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/login-in", pathMatch: "full" },
   
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
      import("./employees/employees.module").then((m) => m.EmployeesModule)
  },
  {
    path: "accounts",
    loadChildren: () =>
      import("./accounts/accounts.module").then((m) => m.AccountsModule)
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule)
  },

  {
    path: "graphs",
    loadChildren: () =>
      import("./graphs/graphs.module").then((m) => m.GraphsModule)
  },

  {
    path:"cards",
    loadChildren: () =>
      import("./cards/cards.module"). then((m) => m.CardsModule)
  },

  {
    path:'human-resource-module',
    loadChildren: () =>
      import("./human-resource-module/human-resource-module.module"). then((m) => m.HumanResourceModuleModule)
  },

  {
    path:'supply-chain-module',
    loadChildren: () =>
      import("./supply-chain-module/supply-chain-module.module"). then((m) => m.SupplyChainModuleModule)
  },

  {
    path:'inventory-module',
    loadChildren: () =>
      import("./inventory-module/inventory-module.module"). then((m) => m.InventoryModuleModule)
  },

  {
    path:'logistics-module',
    loadChildren: () =>
      import("./logistics-module/logistics-module.module"). then((m) => m.LogisticsModuleModule)
  },

  {
    path:'finance-module',
    loadChildren: () =>
      import("./finance-module/finance-module.module"). then((m) => m.FinanceModuleModule)
  },

  {
    path:'crm-n-sales-module',
    loadChildren: () =>
      import("./crm-n-sales-module/crm-n-sales-module.module"). then((m) => m.CrmNSalesModuleModule)
  },

  {
    path:'masterdata-module',
    loadChildren: () =>
      import("./masterdata-module/masterdata-module.module"). then((m) => m.MasterdataModuleModule)
  },

]
},
 
  { 
    path: "authentication", 
    component: AuthlayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then((m) =>m.AuthenticationModule)
    
  },

  // { 
  //   path: "**", 
  //   redirectTo: "authentication/login-in" 
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
