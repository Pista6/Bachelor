import { Component } from '@angular/core';
import { Options }    from '../options';
import { OptionsService } from '../options.service';
import { DataFromServer } from '../dataFromServer';

@Component({
  selector: 'app-analysis-content',
  templateUrl: './analysis-content.component.html',
  styleUrls: ['./analysis-content.component.css']
})

export class AnalysisContentComponent {

  showDataComponent: boolean = false;
  formularOptions = new Options();
  public dataFromServer: DataFromServer[];

  constructor(private optionService: OptionsService){  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.formularOptions); }

  getData():void { 
    console.log(JSON.stringify(this.formularOptions));
    // this.optionService.getData(this.model.dataOption, jsonForm).subscribe();
    this.optionService.getData(this.formularOptions.dataOption)
      .subscribe(data => this.dataFromServer = data);
    this.showDataComponent = true;
  }
}

