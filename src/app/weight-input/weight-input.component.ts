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

  submittedWeights = [];
   weightToAdd = {};
   bodyFatToAdd = '';
  // dateToAdd = '';
  increment = 0;

  constructor(private _weightsService: WeightsService) { 
  }

  ngOnInit(): void {
    this._weightsService.getWeights(localStorage.getItem('id'))  
      .subscribe(
        res => {
          //console.log(res[0].weights)
          this.submittedWeights = res[0].weights
          console.log(this.submittedWeights)
          this.loadSubmittedWeights()
        },
        err => console.log(err)
      );
      //console.log('id = ' + localStorage.getItem('id'))
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
  }

  public loadSubmittedWeights(){
      this.submittedWeights.forEach(weight => {
      this.weightChart.data.labels.push(weight.date);
      this.weightChart.data.datasets[0].data.push(weight.weight);
      this.weightChart.update();
    });
  }
  public submitWeight(weight, bodyFat, date){
    //console.log(this.submittedWeights)
    //this.loadSubmittedWeights()
    //console.log(weight, bodyFat, date);
    // this.weightChart.data.labels.push(date);
    // this.weightChart.data.datasets[0].data.push(weight);
    // this.weightChart.update();
    this.weightToAdd = {
      'weight': weight,
      'bodyFat': bodyFat,
      'date': date
    }
    this._weightsService.addWeight(localStorage.getItem('id'), this.weightToAdd)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }
}
