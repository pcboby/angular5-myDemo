import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LayoutComponent
} from './layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
      path: '',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      loadChildren: '../dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'ngBootstrap',
      loadChildren: '../ng-bootstrap/ng-bootstrap.module#NgBootstrapModule'
    },
    {
      path: 'bootstrap',
      loadChildren: '../bootstrap/bootstrap.module#BootstrapModule'
    },
    {
      path: 'ngxBootstrap',
      loadChildren: '../ngx-bootstrap/ngx-bootstrap.module#NgxBootstrapModule'
    },
    {
      path: 'ngCharts',
      loadChildren: '../ng-charts/ng-charts.module#NgChartsModule'
    },
    {
      path: 'example',
      loadChildren: '../example/example.module#ExampleModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}
