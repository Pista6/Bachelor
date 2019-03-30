import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { AnalysisContentComponent } from '../analysis-content/analysis-content.component';

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.css']
})
export class DataChartsComponent {

  @ViewChild(AnalysisContentComponent) analysisContentComponent: any;
  @Input() showDataChartComponent: boolean;


  constructor() { }

  public graph;

  ngOnInit() {
    this.graph = {
      data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };
  }



}
