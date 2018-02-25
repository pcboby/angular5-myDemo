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
  CommonModule
} from '@angular/common';
import {
  WebDesignEditorModule
} from '../../web-design-editor/web-design-editor.module';
import {
  FormsModule
} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    WdEditorRouting,
    WebDesignEditorModule
  ],
  declarations: [
    WdEditorComponent
  ]
})
export class WdEditorModule {}
