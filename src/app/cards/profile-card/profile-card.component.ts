import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  userData = [
    {
      photo: './assets/images/barack_obama.jfif',
      firstName: 'Athanas',
      lastName: 'Sombe',
      role: 'Sales Manager',
      email: 'athanassombe99@gmail.com',
      grossPay: '79,000',
      status: 'Active',
      career: 'Sales and Marketing(Degree)',
      country: 'Kenya'
    },
    {
      photo: './assets/images/dmitri_mendeleev.jpg',
      firstName: 'Dmitri',
      lastName: 'Mendeleev',
      role: 'Sales Agent',
      email: 'dmitrimendelv99@gmail.com',
      grossPay: '59,000',
      status: 'Active',
      career: 'Sales and Marketing(Diploma)',
      country: 'Uganda'
    },
    {
      photo: './assets/images/vladmir_putin.jpg',
      firstName: 'Vladmir',
      lastName: 'Putin',
      role: 'Warehouse Manager',
      email: 'vputin34@gmail.com',
      grossPay: '59,000',
      status: 'Flagged',
      career: 'Procurement (Diploma)',
      country: 'Rwanda'
    },
    {
      photo: './assets/images/netanyahu.jfif',
      firstName: 'Lazarus',
      lastName: 'Mugendi',
      role: 'Delivery',
      email: 'lnzomo34@gmail.com',
      grossPay: '39,000',
      status: 'Active',
      career: 'Logistics Management (Diploma)',
      country: 'Tanzania'
    },
    {
      photo: './assets/images/Marie_Curie.jpg',
      firstName: 'Angela',
      lastName: 'Mueni',
      role: 'Human Resource',
      email: 'amueni67@gmail.com',
      grossPay: '89,000',
      status: 'Active',
      career: 'Human Resource Manager (Degree)',
      country: 'Tanzania'
    }
  ];
  
  selectedProfile: any = null
  selectedUser: any;
  user: any;

  ngOnInit(): void {
    // Optionally, select a default user to display
    this.selectedUser = this.userData[0];
  }

  onSearch(event: Event): void {
   const inputElemet =event.target as HTMLInputElement;
   const searchValue = inputElemet.value;

   this.selectedProfile = this.userData.find(user =>
    this.user.firstName.tolowercase() === searchValue ||
    this.user.lastName.tolowercase() === searchValue
   );
  }
}
