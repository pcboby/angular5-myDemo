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
  LayoutToolbarComponent
} from './components';
import {
  DrakeStoreService
} from './services';
import {
  WebDesignEditorComponent
} from './web-design-editor.component';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { EditorStoreService } from './services/editor-store.service';
import { ButtonsModule } from 'ngx-bootstrap';
const modules = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  ButtonsModule.forRoot()
];
const components = [
  WebDesignEditorComponent,
  ContainerComponent,
  ItemComponent,
  LayoutToolbarComponent,
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
  providers: [EditorStoreService, DrakeStoreService]
})
export class WebDesignEditorModule {}
