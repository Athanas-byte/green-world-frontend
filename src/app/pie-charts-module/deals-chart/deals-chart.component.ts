import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-deals-chart',
  templateUrl: './deals-chart.component.html',
  styleUrls: ['./deals-chart.component.scss']
})
export class DealsChartComponent implements OnInit{
  private chart: any;
  // urlGetApplicationCount!: string;
  // applicationCountData: any;
  isLoading!: boolean;
  labelList: string[] = ['Closed', 'In-Process', 'Leads'];
  totalCountList: string[] = ['78', '103', '230'];

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
    const ctx = document.getElementById('counterparty') as HTMLCanvasElement;
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


