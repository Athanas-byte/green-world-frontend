import { Component, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent {

  constructor(private router: Router){}

  @ViewChild(MatSort) empTbSort = new MatSort();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchCriteria = {
    status: '',
    role: '',
    name: '',
    staffNumber: ''
  };

  currentUserRole = 'HR'; // Example: this could be 'HR', 'Admin', or other roles

  // Empty table initially, remove hardcoded data
  employees: any[] = [];

  displayedColumns: string[] = [
    'staffNumber', 
    'name', 
    'status', 
    'role', 
    'remuneration'];

    dataSource = new MatTableDataSource();
  // router: any;

  get filteredEmployees() {
    return this.employees.filter(employee =>
      (this.searchCriteria.status ? employee.status.includes(this.searchCriteria.status) : true) &&
      (this.searchCriteria.role ? employee.role.includes(this.searchCriteria.role) : true) &&
      (this.searchCriteria.name ? employee.name.toLowerCase().includes(this.searchCriteria.name.toLowerCase()) : true) &&
      (this.searchCriteria.staffNumber ? employee.staffNumber.includes(this.searchCriteria.staffNumber) : true)
    );
  }

  isLoading= 'false'

  isRemunerationVisible() {
    return this.currentUserRole === 'HR' || this.currentUserRole === 'Admin';
  }

  viewRemunerations(){
    this.router.navigate(['./employees/employee-remunerations'])
  }

  addNewStaff() {
    this.router.navigate(['./authentication/register-user'])
    console.log('Adding new staff');
  }

  viewStaffProfile() {
    this.router.navigate(['./employees/employee-profiles'])
    console.log('Viewing staff profiles');
  }
}
