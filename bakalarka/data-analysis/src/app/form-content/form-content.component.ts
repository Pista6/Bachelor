import { Component } from '@angular/core';
import { Options } from '../options';
import { OptionsService } from '../option-service.service';

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
  public dataFromServer;

  constructor(private optionService: OptionsService) { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.formularOptions); }

  getData(): void {
    this.appendOnObject();
    console.log(JSON.stringify(this.formularOptions));

    this.optionService.getData(this.formularOptions)
      .subscribe(data => {
            //console.log("here comes data");
            //console.log(data);
            this.dataFromServer = data;
          }
        );
        setTimeout(()=>{
          
        }, 500);

    // this.dataFromServer = {
    //   "attribute": [
    //       [
    //           0.291,
    //           0.3
    //       ],
    //       [
    //           0.292,
    //           0.3
    //       ]
    //     ]
    //   }
  // this.dataFromServer =   {
  //   "attribute": [
  //     [
  //         -14.760150851758794,
  //         14.760150851758798,
  //         44.28045255527639
  //     ],
  //     [1,0,1]
  //   ]
  // }
    //console.log(this.dataFromServer);
    this.chartType = this.formularOptions.algorithm;
    this.showDataComponent = true;
  }

  appendOnObject(): void {

    var startMonth = this.checkDateValue(this.formStartDate.getMonth() + 1);
    var endMonth = this.checkDateValue(this.formEndDate.getMonth() + 1);
    var startDay = this.checkDateValue(this.formStartDate.getDate());
    var endDay = this.checkDateValue(this.formEndDate.getDate());
    
    let formatted_start_date = this.formStartDate.getFullYear() + "-" + startMonth + "-" + startDay;
    let formatted_end_date = this.formEndDate.getFullYear() + "-" + endMonth + "-" + endDay;

    //console.log(formatted_start_date + "   ->   " + formatted_end_date);
    this.formularOptions.dataset = this.formDataset;
    this.formularOptions.algorithm = this.formFunction;
    this.formularOptions.startDate = formatted_start_date;
    this.formularOptions.endDate = formatted_end_date;
  };

  checkDateValue(date): String {
    if(date < 10){
      return "0" + date;
    } else return date;
  }

}
