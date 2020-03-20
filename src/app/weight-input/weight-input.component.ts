import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {

  //LineChart = [];
  chart: any;
  //dataPoints: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9];
 // labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"], // your labels array
        datasets: [
          {
            data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9], // your data array
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
