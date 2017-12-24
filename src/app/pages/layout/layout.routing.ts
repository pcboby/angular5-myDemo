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
      path: 'elements',
      loadChildren: '../bs-elements/bs-elements.module#BsElementsModule'
    },
    {
      path: 'ngxBootstrap',
      loadChildren: '../ngx-bootstrap/ngx-bootstrap.module#NgxBootstrapModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}
