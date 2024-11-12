import { Component, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subsidiary-performance-table',
  templateUrl: './subsidiary-performance-table.component.html',
  styleUrls: ['./subsidiary-performance-table.component.scss']
})
export class SubsidiaryPerformanceTableComponent {

  totalData: number = 10;
  pageSize: number = 0;
  pageSizes: any = [5, 10, 20, 25, 100, 10000]

  constructor(private router: Router){}

  @ViewChild(MatSort) empTbSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageChangeEvent(event: any){}

  searchCriteria = {
    country: '',
    code: '',
    
  };

  currentUserRole = 'HR'; // Example: this could be 'HR', 'Admin', or other roles

  // Empty table initially, remove hardcoded data
  employees: any[] = [];

  displayedColumns: string[] = [
    'subsidiaryCode', 
    'country', 
    'totalTurnover', 
    'grossSales',
    'percentRise' 
    ];

    dataSource = new MatTableDataSource();
  // router: any;

  get filteredEmployees() {
    return this.employees.filter(employee =>
      (this.searchCriteria.country ? employee.status.includes(this.searchCriteria.country) : true) &&
      (this.searchCriteria.code ? employee.role.includes(this.searchCriteria.code) : true) 
    );
  }

  isLoading: boolean = false

  isRemunerationVisible() {
    return this.currentUserRole === 'HR' || this.currentUserRole === 'Admin';
  }

 
}


