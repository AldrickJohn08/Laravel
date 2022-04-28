import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
  constructor() {}
  ;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2015', '2016', '2017', '2018', '2019', '2021', '2022' ],
    datasets: [
      {
        backgroundColor:"#173074",
        data: [ 65, 59, 80, 81, 56, 55, 40 ], 
        label: 'Daily'},
      { 
        backgroundColor:"#611774",
        data: [ 28, 48, 40, 19, 86, 27, 90 ], 
        label: 'Weekly'},
      { 
          backgroundColor:"#175274",
          data: [ 30, 25, 13, 97, 26, 17, 46 ], 
          label: 'Monthlty'}
    ]
  };

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      70,
      Math.round(Math.random() * 60),
      56,
      Math.round(Math.random() * 30),
      40 ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 53),
      60,
      39,
      Math.round(Math.random() * 65),
      28,
      Math.round(Math.random() * 39),
      73 ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 27),
      30,
      89,
      Math.round(Math.random() * 56),
      17,
      Math.round(Math.random() * 79),
      56 ]; 
    this.chart?.update();
  }
}