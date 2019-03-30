import '../polyfills';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AnalysisContentComponent } from './analysis-content/analysis-content.component';
import { AngularMaterialModule } from  './material-module';
import { DataChartsComponent } from './data-charts/data-charts.component';

import { PlotlyModule } from 'angular-plotly.js';


@NgModule({
  declarations: [
    AppComponent,
    AnalysisContentComponent,
    DataChartsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PlotlyModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),

    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

