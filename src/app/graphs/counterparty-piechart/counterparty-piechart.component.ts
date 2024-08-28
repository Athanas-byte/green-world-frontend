import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';

@Component({
  selector: 'app-counterparty-piechart',
  templateUrl: './counterparty-piechart.component.html',
  styleUrls: ['./counterparty-piechart.component.css']
})
export class CounterpartyPiechartComponent {
  public chartSeries: ApexNonAxisChartSeries;
  public chartDetails: ApexChart;
  public chartLabels: string[];
  public chartLegend: ApexLegend;
  public chartResponsive: ApexResponsive[];

  constructor() {
    this.chartSeries = [44, 55, 41]; // Example data for Individuals, Corporates, Institutions
    this.chartLabels = ["Individuals", "Corporates", "Institutions"];
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
