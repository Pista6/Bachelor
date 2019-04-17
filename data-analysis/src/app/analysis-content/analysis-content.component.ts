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

  formFunction: string;
  formDataset: string;
  formStartDate: Date;
  formEndDate: Date;

  showDataComponent: boolean = false;
  formularOptions = new Options();
  public dataFromServer: DataFromServer[];

  constructor(private optionService: OptionsService){  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.formularOptions); }

  getData():void { 
    this.appendOnObject();
    console.log(JSON.stringify(this.formularOptions));
    // this.optionService.getData(this.model.dataOption, jsonForm).subscribe();
    this.optionService.getData(this.formularOptions.dataOption)
      .subscribe(data => this.dataFromServer = data);
    this.showDataComponent = true;
  }

  appendOnObject(): void {
    let formatted_start_date = this.formStartDate.getFullYear() + "-" + (this.formStartDate.getMonth() + 1) + "-" + this.formStartDate.getDate();
    let formatted_end_date = this.formEndDate.getFullYear() + "-" + (this.formEndDate.getMonth() + 1) + "-" + this.formEndDate.getDate();

    this.formularOptions.analysisFunction = this.formFunction;
    this.formularOptions.dataOption = this.formDataset;
    this.formularOptions.startDate = formatted_start_date;
    this.formularOptions.endDate = formatted_end_date;
  };
}

