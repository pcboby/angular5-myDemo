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
  ExampleComponent,
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
import { FlexLayoutModule } from '@angular/flex-layout';

const components = [ExampleComponent, TargetItemsComponent, SourceItemsComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    WdEditorRouting,
    WebDesignEditorModule
  ],
  declarations: [
    WdEditorComponent,
    ...components
  ]
})
export class WdEditorModule {}
