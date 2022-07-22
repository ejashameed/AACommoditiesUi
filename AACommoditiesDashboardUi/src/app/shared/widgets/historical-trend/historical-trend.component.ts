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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
          [43934],
          [33934],
          [63934],
          [13934],
        ]
      },

      {
        name: 'Oil',
        type: 'line',
        data: [
          [13934],
          [38934],
          [43934],
          [23934],

        ]
      },

    ],

  };

}
