import { Component } from '@angular/core';

import { Options }    from '../options';

@Component({
  selector: 'app-analysis-content',
  templateUrl: './analysis-content.component.html',
  styleUrls: ['./analysis-content.component.css']
})
export class AnalysisContentComponent {

  model = new Options('', '', '', '');

  onSubmit() { 
    console.log(JSON.stringify(this.model))
    
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
