import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-in-card',
  templateUrl: './delivery-in-card.component.html',
  styleUrls: ['./delivery-in-card.component.scss']
})
export class DeliveryInCardComponent implements OnInit{

  intransitInValue!: number;
  currency!: string

  ngOnInit(): void {
    this.intransitInValue = 42
    this.currency = 'KES'
  }

}
