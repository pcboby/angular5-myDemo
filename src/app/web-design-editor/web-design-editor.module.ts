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
  LayoutCodeComponent,
  LayoutToolbarComponent,
  LayoutAttribComponent,
  LayoutCascadeComponent
} from './components';
import {
  DrakeStoreService
} from './services';
import {
  WebDesignEditorComponent
} from './web-design-editor.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  EditorStoreService
} from './services/editor-store.service';
import {
  ButtonsModule,
  TabsModule
} from 'ngx-bootstrap';
const modules = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  ButtonsModule.forRoot(),
  TabsModule.forRoot()
];
const components = [
  WebDesignEditorComponent,
  ContainerComponent,
  ItemComponent,
  LayoutToolbarComponent,
  LayoutSourceComponent,
  LayoutAttribComponent,
  LayoutTargetComponent,
  LayoutCodeComponent,
  LayoutCascadeComponent
];
const directives = [
  DraggableDirective,
  DroppableDirective,
  DragHandleDirective
];
const services = [
  EditorStoreService, DrakeStoreService
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
  providers: [
    ...services
  ]
})
export class WebDesignEditorModule {}
