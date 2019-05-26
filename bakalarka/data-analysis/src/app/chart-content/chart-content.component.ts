import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-content',
  templateUrl: './chart-content.component.html',
  styleUrls: ['./chart-content.component.css']
})
export class ChartContentComponent {

  @Input() showDataChartComponent: boolean;
  @Input() dataFromServer;
  @Input() chartType: string;

  constructor() { }

  public graph;

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.showDataChartComponent) {
      switch (this.chartType) {
        case "regression":
          // code block
          //console.log(this.dataFromServer.attribute);
          this.drawRegressionChart();
          break;
        case "correlationMatrix":
          // code block
          //console.log("Correlation: " + this.dataFromServer);
          this.drawCorrelationChart();
          break;
        case "histogram":
          //console.log("Histogram: " + this.dataFromServer);
          this.drawHistogramChart();
          break;
        default:
          // code block
          console.log("Nothing");
      }
    }
  }


  drawRegressionChart() {
    
    var line = this.getAttributes();

    this.graph = {
      data: [
        { 
          x: line.x,
          y: line.y,
          type: 'line',
          name: 'Lineárna regresia'
        },
        { 
          x: this.dataFromServer.val_x,
          y: this.dataFromServer.val_y,
          mode: 'markers',
          type: 'scatter',
          name: 'Hodnoty z datasetu',
          marker: {
            color: 'rgb(219, 64, 82)',
            size: 12
          }
        }
      ]
    }

  }

  drawCorrelationChart() {
    
    console.log(this.dataFromServer.attribute);
    this.graph = {
      data: [
        { 
          x: ["Open","High","Low","Close","Adj"],
          y: ["Open","High","Low","Close","Adj"],
          z: this.dataFromServer.attribute,
          type: 'surface'
        },
      ]
    }

  }

  drawHistogramChart() {
    
    this.graph = {
      data: [
        { x: this.dataFromServer.attribute[0],
          y: this.dataFromServer.attribute[1],
           type: 'bar',
           title: ''
          },
      ]
    }
  }

  getAttributes(){
    var line = this.dataFromServer.attribute[0];
    let a = line[0];
    let b = line[1];
    var max = 0;
    for(let i = 0; i < this.dataFromServer.val_x.length; i++){
      if(this.dataFromServer.val_x[i] > max){
        max = this.dataFromServer.val_x[i];
      }
    }

    let linePlt = {
     x : [0,max],
     y : [b, a*max + b]
    };

    return linePlt;
  }

}
