import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ITrend } from '../../interfaces/ITrend';

@Component({
  selector: 'app-historical-trend',
  templateUrl: './historical-trend.component.html',
  styleUrls: ['./historical-trend.component.scss']
})
export class HistoricalTrendComponent implements OnInit, OnChanges {
  @Input() seriesData: ITrend[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  @ViewChild('chart') componentRef: any;
  chartRef: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {    
    let dataArr: any[] = [];
    this.seriesData.forEach(element => {
      for (var i = 0; i <= element.data.length; i++) {
        var obj = element.data[i];
        if (obj != null) {
          dataArr[i] = Object.values(obj);
        }
      }
      this.chartRef.addSeries({
        name: element.name,
        type: element.type,
        data: dataArr
      })
    });
  }

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

    series: [],

  };

  chartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };
}
