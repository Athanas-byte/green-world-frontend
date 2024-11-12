import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-big-card',
  templateUrl: './inventory-big-card.component.html',
  styleUrls: ['./inventory-big-card.component.scss']
})
export class InventoryBigCardComponent implements OnInit {

  selectedBranch: string = 'All';
  selectedProduct: string = 'All';
  branches: string[] = ['All', 'Subsidiary', 'Warehouse'];
  subsidiaries: string[] = ['Kenya', 'South Sudan', 'Uganda', 'Tanzania', 'DRC', 'Ethiopia'];
  warehouses: string[] = ['Syokimau', 'Kitengela', 'Bongo', 'Arusha', 'Juba', 'Khartoum', 'Tororo', 'Jinja', 'Adis Ababa', 'Tana'];
  products: string[] = ['All']; 

  ngOnInit(): void {
    this.updateProductOptions();
  }

  updateProductOptions() {
    if (this.selectedBranch === 'Subsidiary') {
      this.products = this.subsidiaries;
    } else if (this.selectedBranch === 'Warehouse') {
      this.products = this.warehouses;
    } else {
      this.products = []; // Clear if "All" is selected
    }
  }
}
