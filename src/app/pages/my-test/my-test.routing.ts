import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MyTestComponent
} from './my-test.component';
import { DirectiveComponent, PipeComponent } from './components';

const routes: Routes = [{
  path: '',
  component: MyTestComponent,
  children: [{
    path: '',
    redirectTo: 'directive'
  }, {
    path: 'directive',
    component: DirectiveComponent
      }, {
          path: 'pipe',
          component: PipeComponent
      }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTestRouting {}
