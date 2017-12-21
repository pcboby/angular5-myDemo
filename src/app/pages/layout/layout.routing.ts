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
      path: 'components',
      loadChildren: '../bs-component/bs-component.module#BsComponentModule'
    },
    {
      path: 'elements',
      loadChildren: '../bs-elements/bs-elements.module#BsElementsModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}
