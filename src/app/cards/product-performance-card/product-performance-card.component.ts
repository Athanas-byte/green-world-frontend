import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-performance-card',
  templateUrl: './product-performance-card.component.html',
  styleUrls: ['./product-performance-card.component.scss']
})

export class ProductPerformanceCardComponent implements OnInit{

  productName!: string;
  soldItems!: number;
  totalTurnover!: number;

  topProducts = [
    {
      productName: 'Solar Panels',
      soldItems: 1200,
      totalTurnover: 12000000
    },
    {
      productName: 'Batteries',
      soldItems: 768,
      totalTurnover: 980000,
    },
    {
      productName: 'Solar Panels',
      soldItems: 678,
      totalTurnover: 340000
    }
    ]

  ngOnInit(): void { }

}
