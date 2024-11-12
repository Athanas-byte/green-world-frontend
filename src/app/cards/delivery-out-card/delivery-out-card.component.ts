import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-out-card',
  templateUrl: './delivery-out-card.component.html',
  styleUrls: ['./delivery-out-card.component.scss']
})
export class DeliveryOutCardComponent implements OnInit{

  intransitOutValue!: number;
  currency!: string

  ngOnInit(): void {
    this.intransitOutValue = 48;
    this.currency = 'KES'
  }

}
