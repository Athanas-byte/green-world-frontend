import { Component } from '@angular/core';
import { Chart, ChartData, ChartOptions, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement, Tooltip, Legend)

@Component({
  selector: 'app-replenish-alert-card',
  templateUrl: './replenish-alert-card.component.html',
  styleUrls: ['./replenish-alert-card.component.scss']
})
export class ReplenishAlertCardComponent {

  chart: any;
  currentInventoryLevel: any;

  ngOnInit(): void {
    this.createGaugeChart();
  }

  createGaugeChart(): void {
    const ctx = document.getElementById('inventorySpeedometerChart') as HTMLCanvasElement;
    
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Danger', 'Moderate', 'Healthy'],
        datasets: [{
          data: [33.33, 33.33, 33.33], // Adjust these values to divide the sections
          backgroundColor: ['#FF0000', 'rgb(255, 205, 86)', 'rgb(54, 150, 200)'], // Red, Yellow, Green
          borderWidth: 0,
          hoverBackgroundColor: ['#FF0000', '#FFFF00', '#00FF00']
        }]
      },
      options: {
        rotation: 225, // Start angle to simulate the gauge starting from the left
        circumference: 270, // End angle for a 3/4 circle
        cutout: '75%', // Makes it look like a gauge by "hollowing" out the center
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
          
        },
        responsive: true,
      }
    });
  }
}
