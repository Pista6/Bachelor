import { Component, Input } from '@angular/core';
import { DataFromServer } from '../dataFromServer';

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.css']
})
export class DataChartsComponent {

  @Input() showDataChartComponent: boolean;
  @Input() dataFromServer: DataFromServer[];

  constructor() { }

  public graph;
  public x: Date[] = [];
  public y: number[] = [];

  ngOnInit() {

  }
  
  ngOnChanges()	{
    if(this.showDataChartComponent){
      console.log("We are here.");
      this.x = [];
      this.y = [];
      this.dataFromServer.map(
        dataEntry => {
          this.x.push(dataEntry.Date);
          this.y.push(dataEntry.Open);
        }
      )
      this.showSomething()
    }
  }

  showSomething() {
    this.graph = {
      data: [
        { x: this.x, y: this.y , type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      ],
    };
    
  }

  

}
