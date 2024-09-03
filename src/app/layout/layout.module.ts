import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthlayoutComponent } from './app_layout/authlayout/authlayout.component';
import { MainlayoutComponent } from './app_layout/mainlayout/mainlayout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsModule } from '../cards/cards.module';
import { UserCardComponent } from '../cards/user-card/user-card.component';


@NgModule({
  declarations: [
    AuthlayoutComponent,
    MainlayoutComponent,
    HeaderComponent,
    SidebarComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    
  ]
})
export class LayoutModule { }
