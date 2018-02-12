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
  WDEditorStoreService
} from './services';
import {
  ContainerComponent,
  ItemComponent
} from './components';

const services = [WDEditorStoreService];
const directives = [DraggableDirective, DroppableDirective, DragHandleDirective];
const components = [ContainerComponent, ItemComponent];

@NgModule({
  imports: [
    CommonModule
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
export class WDEditorModule {}
