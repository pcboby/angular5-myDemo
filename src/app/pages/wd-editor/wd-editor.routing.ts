import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  WdEditorComponent
} from './wd-editor.component';

const routes: Routes = [{
  path: '',
  component: WdEditorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WdEditorRouting {}
