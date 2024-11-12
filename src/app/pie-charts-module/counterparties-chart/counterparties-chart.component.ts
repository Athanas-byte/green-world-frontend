import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-counterparties-chart',
  templateUrl: './counterparties-chart.component.html',
  styleUrls: ['./counterparties-chart.component.scss']
})
export class CounterpartiesChartComponent {

  private chart: any;
  // urlGetApplicationCount!: string;
  // applicationCountData: any;
  isLoading!: boolean;
  labelList: string[] = ['Banks', 'Customers', 'Suppliers','Distributors', 'Regulatory Bodies'];
  totalCountList: string[] = ['3', '103', '5', '2', '2'];

  constructor(private cdr: ChangeDetectorRef) {
  }

  @Input() filterparams: any;
  ngOnInit(): void {
    //===============================RISK RATING =============================
    this.isLoading = false;
    this.setupChart(this.labelList, this.totalCountList);
    //
  }

  // method to set up chart data and configuration========================================================
  private setupChart(labelList: string[], totalCountList: string[]): void {
    // data for the chart
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = document.getElementById('dealschartid') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labelList,
        datasets: [
          {
            data: totalCountList,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 230, 50)',
              'rgb(54, 150, 200)'
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

}
