import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AnalysisContentComponent } from './analysis-content/analysis-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyMaterialModule } from  './material-module';

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
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
