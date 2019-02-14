import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisContentComponent } from './analysis-content/analysis-content.component'
import { MainContentComponent } from './main-content/main-content.component'

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'analysis',
    component: AnalysisContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
