import {
  WdEditorComponent
} from './wd-editor.component';
import {
  WdEditorRouting
} from './wd-editor.routing';

import {
  NgModule
} from '@angular/core';

import {
  TargetItemsComponent,
  SourceItemsComponent
} from './components';
import {
  CommonModule
} from '@angular/common';
import {
  WebDesignEditorModule
} from '../../web-design-editor/web-design-editor.module';
import {
  FormsModule
} from '@angular/forms';

const components = [ TargetItemsComponent, SourceItemsComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WdEditorRouting,
    WebDesignEditorModule
  ],
  declarations: [
    WdEditorComponent,
    ...components
  ]
})
export class WdEditorModule {}
