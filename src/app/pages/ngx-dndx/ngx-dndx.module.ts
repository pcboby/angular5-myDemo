import {
  NgxDndxComponent
} from './ngx-dndx.component';
import {
  NgxDndxRouting
} from './ngx-dndx.routing';

import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  FormsModule
} from '@angular/forms';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

import {
  NgxUIModule
} from '@swimlane/ngx-ui';
import '@swimlane/ngx-ui/release/index.css';
import {
  NgxDnDModule
} from '@swimlane/ngx-dnd';


import {
  MyDndComponent,
  DndExampleComponent
} from './components';
@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    NgxUIModule,
    NgxDndxRouting,
    NgxDnDModule
  ],
  declarations: [NgxDndxComponent, MyDndComponent, DndExampleComponent]
})
export class NgxDndxModule {}
