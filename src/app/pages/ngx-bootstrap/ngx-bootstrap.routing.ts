import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxBootstrapComponent } from './ngx-bootstrap.component';

const routes: Routes = [
    {
      path: '',
      component: NgxBootstrapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgxBootstrapRouting {}
