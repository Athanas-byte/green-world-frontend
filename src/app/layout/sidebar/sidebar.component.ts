import { Component } from '@angular/core';
import { RouteInfo } from './sidebar.metadata'; // Make sure to import RouteInfo type
import { ROUTES } from './sidebar.metadata';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  activeItem: string = '';
  isSidenavOpened: boolean = true;
  sidebarRoutes: RouteInfo[] = []; // Define sidebarRoutes with RouteInfo type
  
  constructor() {
    // You can filter and map the ROUTES array as needed based on user roles here
    this.sidebarRoutes = ROUTES.filter(route => route.role.includes("ADMIN"));
  }

  setActive(item: string) {
    this.activeItem = item;
  }
}
