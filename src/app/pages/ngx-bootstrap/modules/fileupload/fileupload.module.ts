

import {
  CommonModule
} from '@angular/common';
import {
  FileuploadComponent
} from './fileupload.component';
import {
  FileuploadRouting
} from './fileupload.routing';

import {
  NgModule
} from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FileuploadRouting,
    CommonModule
  ],
  declarations: [FileuploadComponent],
  exports: [FileuploadComponent]
})
export class FileuploadModule {}
