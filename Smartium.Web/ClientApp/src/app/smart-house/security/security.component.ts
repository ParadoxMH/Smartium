import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { number } from 'echarts';

@Component({
  selector: 'app-security-component',
  templateUrl: './security.component.html'
})
export class SecurityComponent {
  public houseId = 0;
  public maxTemp = 100;
  public maxHumidity = 200;
  public houseName = 'Rivnenska 12a 10';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.houseId = this.route.snapshot.params.houseId;
    console.log(this.houseId); 
    
  }
}
