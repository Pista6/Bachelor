import { Component } from '@angular/core';
import { Options }    from '../options';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-analysis-content',
  templateUrl: './analysis-content.component.html',
  styleUrls: ['./analysis-content.component.css']
})
export class AnalysisContentComponent {

  model = new Options('', '', '', '');
  dataFromServer: JSON;

  constructor(private optionService: OptionsService){  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  getData():void { 
    console.log(JSON.stringify(this.model));
    // this.optionService.getData(this.model.dataOption, jsonForm).subscribe();
    this.optionService.getData(this.model.dataOption)
    .subscribe(data => this.dataFromServer = data);
  }
}
