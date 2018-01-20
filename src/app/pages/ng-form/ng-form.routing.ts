import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgFormComponent } from './ng-form.component';

const routes: Routes = [
  {
    path: '',
    component: NgFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgFormRouting {}
