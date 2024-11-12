import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cashflow-analyticalgraph',
  templateUrl: './cashflow-analyticalgraph.component.html',
  styleUrls: ['./cashflow-analyticalgraph.component.scss']
})
export class CashflowAnalyticalgraphComponent implements OnInit {

  selectedWeek: string = '';
  selectedProduct: string = '';
  isLoading: boolean = false

  // weeks: string[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  // products: string[] = ['Solars', 'Batteries', 'ES Bulbs'];

  // chartSeries: ApexAxisChartSeries = [
  //   {
  //     name: 'Cash Inflow',
  //     data: [500, 600, 700, 800, 900, 1000, 1100]
  //   },
  //   {
  //     name: 'Cash Outflow',
  //     data: [400, 300, 200, 500, 400, 300, 200]
  //   }
  // ];

  // chartOptions: ApexChart = {
  //   type: 'line',
  //   height: 350
  // };

  // xAxisOptions: ApexXAxis = {
  //   categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  // };

  // chartColors: string[] = ['#FF5733', '#33B5FF'];
  chart: any;
  weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  products = ['Solars', 'Batteries', 'ES Bulbs'];

  ngOnInit() {
    this.selectedWeek = this.weeks[0];
    this.selectedProduct = this.products[0];

    const labels = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

    const data1 = [160000, 240000, 200000, 190000, 200000, 220000, 210000];

    const data2 = [120000, 220000, 180000, 168000, 180000, 200000, 205000];

    this.setupChart(labels, data1, data2)
  }

  private setupChart(labels: string[], data1: number[], data2: number[]): void {
    // data for the chart
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = document.getElementById('flagged-transac') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels, // Days of the week: Monday to Sunday
        datasets: [
          {
            label: 'Cash-inflow', // Label for the first dataset
            data: data1,
            backgroundColor: 'rgba(250, 38, 38, 0.2)', // Transparent fill for first line
            borderColor: '#a32a29', // Color of the first line
            borderWidth: 3, // Increase the line width
            tension: 0.35,
          },
          {
            label: 'Cash-outflow', // Label for the second dataset
            data: data2,
            backgroundColor: 'rgba(38, 150, 250, 0.2)', // Transparent fill for second line
            borderColor: '#119c11', // Color of the second line
            borderWidth: 3, // Increase the line width
            tension: 0.35,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            beginAtZero: true,
          },
        },
      },
    });
  }
}
