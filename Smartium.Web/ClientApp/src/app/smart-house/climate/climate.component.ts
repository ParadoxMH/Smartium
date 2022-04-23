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
  public houseId = 0;
  public maxTemp = 100;
  public maxHumidity = 200;
  public houseName = 'My fisrt house';

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
        data: [ 23, 41, 32, 28, 14,  0, -5, -8, -1, 7 ],
        label: 'Temperature',
        backgroundColor: 'rgba(255, 152, 73,0.2)',
        borderColor: 'rgba(255, 152, 73, 1)',
        pointBackgroundColor: 'rgba(255, 152, 73,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 152, 73,0.8)',
        fill: 'origin',
      },
      {
        data: [ 58, 48, 41, 79, 86,  38, 90, 86, 65, 44],
        label: 'Humidity',
        backgroundColor: 'rgba(0, 152, 255,0.2)',
        borderColor: 'rgba(0, 152, 255,1)',
        pointBackgroundColor: 'rgba(0, 152, 255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 152, 255,1)',
        fill: 'origin',
      }
    ],
    labels: [ '4/10/2022', '4/11/2022', '4/12/2022', '4/13/2022', '4/14/2022',  '4/15/2022', '4/16/2022', '4/17/2022', '4/18/2022', '4/19/2022' ]
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

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = ClimateComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = ClimateComponent.generateNumber(i);
      x.data.push(num);
      //x.data.shift();
    });
    this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);
    //this.lineChartData?.labels?.shift();

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[0].borderColor = 'green';
    this.lineChartData.datasets[0].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = [ '1st Line', '2nd Line' ];
    }

    this.chart?.update(); 
  }
}
