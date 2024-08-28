import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';

@Component({
  selector: 'app-sales-piechart',
  templateUrl: './sales-piechart.component.html',
  styleUrls: ['./sales-piechart.component.css']
})
export class SalesPiechartComponent {
  public chartSeries: ApexNonAxisChartSeries;
  public chartDetails: ApexChart;
  public chartLabels: string[];
  public chartLegend: ApexLegend;
  public chartResponsive: ApexResponsive[];

  constructor() {
    this.chartSeries = [4400, 5500,]; // Example data for Individuals, Corporates, Institutions
    this.chartLabels = ["Leads", "Closed", ];
    this.chartDetails = {
      type: 'donut',
      width: '100%'
    };
    this.chartLegend = {
      position: 'top'
    };
    this.chartResponsive = [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ];
  }

}
