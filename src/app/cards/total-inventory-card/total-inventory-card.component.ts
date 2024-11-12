import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-inventory-card',
  templateUrl: './total-inventory-card.component.html',
  styleUrls: ['./total-inventory-card.component.scss']
})
export class TotalInventoryCardComponent implements OnInit{

  companyValue!: number;
  currency!: string

  constructor(){}
  ngOnInit(): void {
    this.companyValue = 160
    this.currency = 'KES'
  }

  

  

    

    
  }


