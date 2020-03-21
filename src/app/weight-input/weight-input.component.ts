import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {

  chart: any;

  weightToAdd = '';
  bodyFatToAdd = 0;
  dateToAdd = '';

  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [], // your labels array
        datasets: [
          {
            data: [], // your data array
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

  public onKey(event: any) { // without type info
    this.weightToAdd = event.target.value;
  }

  public addData() {
    this.chart.data.labels.push(this.bodyFatToAdd++);
    this.chart.data.datasets.forEach((dataset) => {
      dataset.data.push(this.weightToAdd);
    });
    this.chart.update();
    this.weightToAdd = '';
  }
}
