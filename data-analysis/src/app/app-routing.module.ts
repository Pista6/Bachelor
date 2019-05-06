import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContentComponent } from './form-content/form-content.component'

const routes: Routes = [
  {
    path: '',
    component: FormContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
