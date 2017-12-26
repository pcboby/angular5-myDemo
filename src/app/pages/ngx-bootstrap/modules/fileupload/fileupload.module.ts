

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
import { FileUploadModule } from "ng2-file-upload";


@NgModule({
  imports: [
    FileuploadRouting,
    CommonModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [FileuploadComponent],
  exports: [FileuploadComponent]
})
export class FileuploadModule {}
