import { Component, Input } from '@angular/core';
import { DataFromServer } from '../dataFromServer';

@Component({
  selector: 'app-chart-content',
  templateUrl: './chart-content.component.html',
  styleUrls: ['./chart-content.component.css']
})
export class ChartContentComponent {

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
