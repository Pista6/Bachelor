import { Component } from '@angular/core';
import { Options } from '../options';
import { OptionsService } from '../options.service';
import { DataFromServer } from '../dataFromServer';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent {

  formFunction: string;
  formDataset: string;
  formStartDate: Date;
  formEndDate: Date;

  showDataComponent: boolean = false;
  chartType: string;
  formularOptions = new Options();
  // public dataFromServer: DataFromServer[];
  public dataFromServer: JSON;

  constructor(private optionService: OptionsService) { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.formularOptions); }

  getData(): void {
    this.appendOnObject();
    console.log(JSON.stringify(this.formularOptions));
    // this.optionService.getData(this.model.dataOption, jsonForm).subscribe();
    // this.optionService.getData(this.formularOptions.dataset)
    //   .subscribe(data => this.dataFromServer = data);
    this.optionService.getData(this.formularOptions)
      .subscribe(data => this.dataFromServer = data);
    // console.log(this.dataFromServer);
    this.chartType = this.formularOptions.algorithm;
    this.showDataComponent = true;
  }

  appendOnObject(): void {
    let formatted_start_date = this.formStartDate.getFullYear() + "-" + (this.formStartDate.getMonth() + 1) + "-" + this.formStartDate.getDate();
    let formatted_end_date = this.formEndDate.getFullYear() + "-" + (this.formEndDate.getMonth() + 1) + "-" + this.formEndDate.getDate();

    this.formularOptions.dataset = this.formDataset;
    this.formularOptions.algorithm = this.formFunction;
    this.formularOptions.startDate = formatted_start_date;
    this.formularOptions.endDate = formatted_end_date;
  };

}
