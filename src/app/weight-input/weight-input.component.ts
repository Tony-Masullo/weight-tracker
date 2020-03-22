import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {

  weightChart: any;
  bodyFatChart: any;

   weightToAdd = '';
   bodyFatToAdd = '';
  // dateToAdd = '';
  increment = 0;

  constructor() { }

  ngOnInit(): void {
    this.weightChart = new Chart('weightCanvas', {
      type: 'line',
      data: {
        labels: [], // your labels array
        datasets: [
          {
            data: [], // your weight data array
            borderColor: 'blue',
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Weight Over Time (lbs)'
        },
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
        },
        layout: {
          padding: {
            left: 30
          }
        }
      }
    });

    // this.bodyFatChart= new Chart('bodyFatCanvas', {
    //   type: 'line',
    //   data: {
    //     labels: [], // your labels array
    //     datasets: [
    //       {
    //         data: [], // your body Fat data array
    //         borderColor: 'red',
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     title: {
    //       display: true,
    //       text: 'Body Fat Over Time (%)'
    //     },
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     },
    //     layout: {
    //       padding: {
    //         left: 50
    //       }
    //     }
    //   }
    // });
  }

  public submitWeight(weight, bodyFat, date){
   
    console.log(weight, bodyFat, date);
    this.weightChart.data.labels.push(date);
    this.weightChart.data.datasets[0].data.push(weight);
    this.weightChart.update();

    // this.bodyFatChart.data.labels.push(date);
    // this.bodyFatChart.data.datasets[0].data.push(bodyFat);
    // this.bodyFatChart.update();
  }
  
}
