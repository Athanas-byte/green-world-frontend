import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthlayoutComponent } from './app_layout/authlayout/authlayout.component';
import { MainlayoutComponent } from './app_layout/mainlayout/mainlayout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AuthlayoutComponent,
    MainlayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
