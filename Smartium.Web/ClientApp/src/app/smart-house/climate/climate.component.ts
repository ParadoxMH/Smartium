import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { number } from 'echarts';

@Component({
  selector: 'app-climate-component',
  templateUrl: './climate.component.html'
})
export class ClimateComponent {
  public isPrediction = false;
  public houseId = 0;
  public maxTemp = 100;
  public maxHumidity = 200;
  public houseName = 'Rivnenska 12a 10';
  public comfortTempList = [
    {
      hour: '1',
      valueTemp: 17
    },
    {
      hour: '2',
      valueTemp: 17
    },
    {
      hour: '3',
      valueTemp: 18
    },
    {
      hour: '4',
      valueTemp: 18
    },
    {
      hour: '5',
      valueTemp: 18
    },
    {
      hour: '6',
      valueTemp: 19
    },
    {
      hour: '7',
      valueTemp: 19
    },
    {
      hour: '8',
      valueTemp: 19
    },
    {
      hour: '9',
      valueTemp: 20
    },
    {
      hour: '10',
      valueTemp: 21
    },
    {
      hour: '11',
      valueTemp: 20
    },
    {
      hour: '12',
      valueTemp: 17
    },
    {
      hour: '13',
      valueTemp: 17
    },
    {
      hour: '14',
      valueTemp: 17
    },
    {
      hour: '15',
      valueTemp: 17
    },
    {
      hour: '16',
      valueTemp: 17
    },
    {
      hour: '17',
      valueTemp: 19
    },
    {
      hour: '18',
      valueTemp: 20
    },
    {
      hour: '19',
      valueTemp: 21
    },
    {
      hour: '20',
      valueTemp: 22
    },
    {
      hour: '21',
      valueTemp: 22
    },
    {
      hour: '22',
      valueTemp: 22
    },
    {
      hour: '23',
      valueTemp: 21
    },
    {
      hour: '24',
      valueTemp: 17
    }
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.houseId = this.route.snapshot.params.houseId;
    console.log(this.houseId);       
    var tempData = [
      {
        value: 30,
        label: new Date()
      },
      {
        value: 30,
        label: new Date()
      }
    ]        
    var humData = [
      {
        value: 70,
        label: new Date()
      },
      {
        value: 30,
        label: new Date()
      }
    ]
    var length = tempData.length > 10 && humData.length > 10 ? 10 : Math.min(new number[tempData.length, humData.length])
    for (let i = 0; i < length; i++) {

    }
  }
  
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 17,17,17,17,17,21,21,21,21,19,19,19,19,19,19,19,21,21,21,21,21,21,19,19 ],
        label: '20/05/22',
        backgroundColor: 'rgba(0, 152, 255,0.2)',
        borderColor: 'rgba(0, 152, 255, 1)',
        pointBackgroundColor: 'rgba(0, 152, 255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 152, 255,0.8)',
        fill: 'origin',
      },
      {
        data: [ 19,19,19,19,19,23,23,21,21,17,17,17,17,17,17,17,22,22,23,23,23,23,22,19 ],
        label: '21/05/22',
        backgroundColor: 'rgba(0, 152, 255,0.2)',
        borderColor: 'rgba(0, 152, 255,1)',
        pointBackgroundColor: 'rgba(0, 152, 255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 152, 255,1)',
        fill: 'origin',
      },
      {
        data: [ 21,21,21,21,21,23,24,24,24,24,24,24,24,24,24,24,24,23,23,23,23,23,21,21],
        label: '22/05/22',
        backgroundColor: 'rgba(0, 152, 255,0.2)',
        borderColor: 'rgba(0, 152, 255,1)',
        pointBackgroundColor: 'rgba(0, 152, 255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 152, 255,1)',
        fill: 'origin',
      },
      {
        data: [ 22.4,21.9,21.9,22.0,23.2,24.5,25.6,25.5,24.7,24.1,23.5,23.6,23.7,23.8,23.8,24.7,25.4,26.3,26.4,26.5,26.6,26.1,25.3,24.3],
        label: 'Predicted',
        backgroundColor: 'rgba(255, 0, 0,0.2)',
        borderColor: 'rgba(255, 0, 0,1)',
        pointBackgroundColor: 'rgba(255, 0, 0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 0, 0,1)',
        fill: 'origin',
      }
    ],
    labels: [ '0', '1', '2', '3', '4',  '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         position: 'center',
      //         enabled: true,
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // private static generateNumber(i: number): number {
  //   return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  // }

  // public randomize(): void {
  //   for (let i = 0; i < this.lineChartData.datasets.length; i++) {
  //     for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
  //       this.lineChartData.datasets[i].data[j] = ClimateComponent.generateNumber(i);
  //     }
  //   }
  //   this.chart?.update();
  // }

  // // events
  // public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  //   console.log(event, active);
  // }

  // public hideOne(): void {
  //   const isHidden = this.chart?.isDatasetHidden(1);
  //   this.chart?.hideDataset(1, !isHidden);
  // }

  // public pushOne(): void {
  //   this.lineChartData.datasets.forEach((x, i) => {
  //     const num = ClimateComponent.generateNumber(i);
  //     x.data.push(num);
  //     //x.data.shift();
  //   });
  //   this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);
  //   //this.lineChartData?.labels?.shift();

  //   this.chart?.update();
  // }

  // public changeColor(): void {
  //   this.lineChartData.datasets[0].borderColor = 'green';
  //   this.lineChartData.datasets[0].backgroundColor = `rgba(0, 255, 0, 0.3)`;

  //   this.chart?.update();
  // }

  // public changeLabel(): void {
  //   if (this.lineChartData.labels) {
  //     this.lineChartData.labels[2] = [ '1st Line', '2nd Line' ];
  //   }

  //   this.chart?.update(); 
  // }
}
