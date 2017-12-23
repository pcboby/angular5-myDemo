import { AppRouting } from './app.routing';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateFactory } from './config/factorys/translate';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: TranslateFactory,
            deps: [HttpClient]
        }
    }),
    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
