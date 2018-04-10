import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import 'element-angular/theme/index.css';

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
  LayoutCascadeComponent,
  ItemMaskComponent,
  ColumnPickerComponent,
  SelectApiPickerComponent
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
import {
  ContainerLayoutComponent,
  ContainerColumnsComponent,
  ContainerColumns2Component,
  CardErrorComponent,
  CardIframeComponent,
  CardInputGroupComponent,
  ContainerPanelComponent,
  CardItemComponent,
  CardOfflineComponent,
  CardNavmenuComponent
} from './cards';
import {
  ElModule
} from 'element-angular';
import {
  SafePipe,
  TransNullPipe
} from './pipes';
const pipes = [TransNullPipe, SafePipe];
const modules = [
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  ButtonsModule.forRoot(),
  // TabsModule.forRoot(),
  ElModule.forRoot()
];
const cardComponents = [
  // default cards
  CardErrorComponent,
  CardItemComponent,
  CardIframeComponent,
  CardInputGroupComponent,
  // default container
  ContainerLayoutComponent,
  ContainerColumnsComponent,
  ContainerColumns2Component,
  ContainerPanelComponent,
  CardOfflineComponent,
  CardNavmenuComponent
];
const components = [
  WebDesignEditorComponent,
  ContainerComponent,
  ItemComponent,
  ItemMaskComponent,
  LayoutToolbarComponent,
  LayoutSourceComponent,
  LayoutAttribComponent,
  LayoutTargetComponent,
  LayoutCodeComponent,
  LayoutCascadeComponent,
  ColumnPickerComponent,
  SelectApiPickerComponent
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
    ...pipes,
    ...components,
    ...cardComponents,
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
