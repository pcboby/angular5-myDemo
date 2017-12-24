import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgBootstrapComponent } from './ng-bootstrap.component';

const routes: Routes = [
    {
      path: '',
      component: NgBootstrapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgBootstrapRouting {}
