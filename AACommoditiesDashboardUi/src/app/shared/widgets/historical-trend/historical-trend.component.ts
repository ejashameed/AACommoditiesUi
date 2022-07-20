import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-historical-trend',
  templateUrl: './historical-trend.component.html',
  styleUrls: ['./historical-trend.component.scss']
})
export class HistoricalTrendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Trends'
    },

    yAxis: {
      title: {
        text: 'Value'
      }
    },

    xAxis: { 
      type: "datetime",
      
      labels: {
        formatter: (currData) => {
          const currDate = new Date(currData.value);
          return currDate.getMonth() + '-' + currDate.getFullYear();
     },
      },

      title: {
        text: 'Period'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    series: [
      {
        name: 'Gold',
        type: 'line',
        data: [
          ['2018-01-02', 43934],
          ['2019-03-12', 52503],
          ['2020-05-18', 57177],

        ]
      },

    ],

  };

}
