import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { KeyValuePipe } from '@angular/common';
import { WeightsService } from '../weights.service';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {

  weightChart: any;
  bodyFatChart: any;

  submittedWeights = {};
   weightToAdd = '';
   bodyFatToAdd = '';
  // dateToAdd = '';
  increment = 0;

  constructor(private _weightsService: WeightsService) { 
  }

  ngOnInit(): void {
    this._weightsService.getWeights(localStorage.getItem('id'))  
      .subscribe(
        //res => this.submittedWeights = res, 
        res => console.log(res),
        err => console.log(err)
      );
      console.log('id = ' + localStorage.getItem('id'))
      //console.log(this.submittedWeights);
      //console.log('submitted weights above')
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
    //     this.submittedWeights[0].forEach(weight => {
    //   this.weightChart.data.labels.push(weight.date);
    //   this.weightChart.data.datasets[0].data.push(weight.weight);
    //   this.weightChart.update();
    // });
    //this.loadSubmittedWeights();
    // this.submittedWeights.forEach(weight => {
    //   this.weightChart.data.labels.push(weight.date);
    //   this.weightChart.data.datasets[0].data.push(weight.weight);
    //   this.weightChart.update();
    // })
  }

  public loadSubmittedWeights(){
      this.submittedWeights[0].forEach(weight => {
      this.weightChart.data.labels.push(weight.date);
      this.weightChart.data.datasets[0].data.push(weight.weight);
      this.weightChart.update();
    });
  }
  public submitWeight(weight, bodyFat, date){
    // for (var key in this.submittedWeights[0]) {
    //   if (this.submittedWeights[0].hasOwnProperty(key) && key == 'weights') {
    //     for 
    //     console.log(key + ": " + this.submittedWeights[0][key]);
    //   }
    // }
    //console.log(JSON.parse(this.submittedWeights[0]))
    console.log(this.submittedWeights)
    //this.loadSubmittedWeights()
    console.log(weight, bodyFat, date);
    this.weightChart.data.labels.push(date);
    this.weightChart.data.datasets[0].data.push(weight);
    this.weightChart.update();
    // this.bodyFatChart.data.labels.push(date);
    // this.bodyFatChart.data.datasets[0].data.push(bodyFat);
    // this.bodyFatChart.update();
  }
  
}
