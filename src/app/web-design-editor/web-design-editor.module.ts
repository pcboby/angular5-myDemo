import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  DraggableDirective,
  DroppableDirective,
  DragHandleDirective
} from './directives';
import {
  ContainerComponent,
  ItemComponent,
  LayoutSourceComponent,
  LayoutTargetComponent,
  LayoutCodeComponent
} from './components';
import {
  DrakeStoreService
} from './services';
import {
  WebDesignEditorComponent
} from './web-design-editor.component';
import {
  FormsModule
} from '@angular/forms';
const modules = [
  FormsModule,
  CommonModule
];
const components = [
  WebDesignEditorComponent,
  ContainerComponent,
  ItemComponent,
  LayoutSourceComponent,
  LayoutTargetComponent,
  LayoutCodeComponent
];
const directives = [
  DraggableDirective,
  DroppableDirective,
  DragHandleDirective
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
    ...directives
  ],
  exports: [
    ...components,
    ...directives
  ],
  providers: [DrakeStoreService]
})
export class WebDesignEditorModule {}
