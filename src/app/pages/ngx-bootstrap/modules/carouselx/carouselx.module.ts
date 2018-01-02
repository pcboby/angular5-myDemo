import {CarouselModule} from 'ngx-bootstrap/carousel';
import {
  CommonModule
} from '@angular/common';
import {
  CarouselxComponent
} from './carouselx.component';
import {
  CarouselxRouting
} from './carouselx.routing';

import { FormsModule } from '@angular/forms';
import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    CarouselxRouting,
    CommonModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  declarations: [CarouselxComponent
],
  exports: [CarouselxComponent]
})
export class CarouselxModule {}
