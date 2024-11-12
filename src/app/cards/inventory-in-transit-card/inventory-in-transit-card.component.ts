import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-in-transit-card',
  templateUrl: './inventory-in-transit-card.component.html',
  styleUrls: ['./inventory-in-transit-card.component.scss']
})
export class InventoryInTransitCardComponent implements OnInit{

  intransitValue!: number;
  currency!: string

  ngOnInit(): void {
    
    this.intransitValue = 90
    this.currency = 'KES'
  }

}
