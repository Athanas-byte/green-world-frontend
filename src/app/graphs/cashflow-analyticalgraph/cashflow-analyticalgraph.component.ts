import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-cashflow-analyticalgraph',
  templateUrl: './cashflow-analyticalgraph.component.html',
  styleUrls: ['./cashflow-analyticalgraph.component.css']
})
export class CashflowAnalyticalgraphComponent implements OnInit {

  selectedWeek: string = '';
  selectedProduct: string = '';

  weeks: string[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  products: string[] = ['Solars', 'Batteries', 'ES Bulbs'];

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Cash Inflow',
      data: [500, 600, 700, 800, 900, 1000, 1100]
    },
    {
      name: 'Cash Outflow',
      data: [400, 300, 200, 500, 400, 300, 200]
    }
  ];

  chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };

  xAxisOptions: ApexXAxis = {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  };

  chartColors: string[] = ['#FF5733', '#33B5FF'];

  

  ngOnInit() {
    this.selectedWeek = this.weeks[0];
    this.selectedProduct = this.products[0];
  }
}
