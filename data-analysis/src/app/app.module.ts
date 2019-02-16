import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MainContentComponent } from './main-content/main-content.component';
import { AnalysisContentComponent } from './analysis-content/analysis-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularMaterialModule } from  './material-module';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    AnalysisContentComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
