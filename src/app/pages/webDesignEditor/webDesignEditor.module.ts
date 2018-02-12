import {
  WebDesignEditorComponent
} from './webDesignEditor.component';
import {
  WebDesignEditorRouting
} from './webDesignEditor.routing';

import {
  NgModule
} from '@angular/core';
import {
  WDEditorModule
} from '../../../@WDEditor';

import {
  ExampleComponent
} from './components';
import {
  CommonModule
} from '@angular/common';

const components = [ExampleComponent];

@NgModule({
  imports: [
    CommonModule,
    WebDesignEditorRouting,
    WDEditorModule
  ],
  declarations: [
    WebDesignEditorComponent,
    ...components
  ]
})
export class WebDesignEditorModule {}
