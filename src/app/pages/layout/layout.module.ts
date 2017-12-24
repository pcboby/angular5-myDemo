import { LayoutRouting } from './layout.routing';

import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SilderComponent } from './silder/silder.component';
import { FooterComponent } from './footer/footer.component';
import { WraperComponent } from './wraper/wraper.component';
import { QuickbarComponent } from './quickbar/quickbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      LayoutRouting
    ],
    declarations: [
      LayoutComponent,
      HeaderComponent,
      SilderComponent,
      FooterComponent,
      WraperComponent,
      QuickbarComponent,
      BreadcrumbComponent
]
})
export class LayoutModule {}
