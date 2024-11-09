import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userData = {
    firstName: "Athanas",
    lastName: "Sombe",
    role: "Sales Manager",
    email: "athanassombe99@gmail.com"
  };

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
}
