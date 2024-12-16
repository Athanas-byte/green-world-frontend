import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tripsoverview',
  templateUrl: './tripsoverview.component.html',
  styleUrls: ['./tripsoverview.component.scss']
})
export class TripsoverviewComponent {

  totalData: number = 10;
  pageSize: number = 0;
  pageSizes: any = [5, 10, 20, 25, 100, 10000]
  isLoading: boolean = false
  
   searchCriteria = {
    country: '',
    code: ''
   }
  // trips[] = []

  trips = [
    {
      id:'AFDGRT45##GHFH',
      amount: '3000 Hshs',
      details: '50kGS',
      steps:[ 
        { time: '10:40am', icon: 'check_circle', status: 'primary' },
        { time: '11:13am', icon: 'check_circle', status: 'primary' },
        { time: '11:59am', icon: 'error', status: 'warn' },]

    }
  ]

  @ViewChild('matSort1') matSort1 = new MatSort
  @ViewChild('paginator1') paginator1!: MatPaginator
  employees: any;

  @ViewChild('matSort2') matSort2 = new MatSort
  @ViewChild('paginator2') paginator2!: MatPaginator
  //employees: any;
  

  pageChangeEvent(event: any){}

  dataSource1 = new MatTableDataSource()
  displayedColumns1: string[]=[
    'orderId',
    'orderNo',
    'vehicleReg',
    'deliveryTime',
    'driverContact',
    //'vehicleStatus',
    'actions'
  ]

  dataSource2 = new MatTableDataSource()
  displayedColumns2: string[] = [
    'orderId',
    'orderNo',
    'vehicleReg',
    'actions'
  ]

  get filteredEmployees() {
    return this.employees.filter((employee: { status: string | any[]; role: string | any[]; }) =>
      (this.searchCriteria.country ? employee.status.includes(this.searchCriteria.country) : true) &&
      (this.searchCriteria.code ? employee.role.includes(this.searchCriteria.code) : true) 
    );
  }

}
