import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { Section4Component } from './sections/section4/section4.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
  ],
  imports: [
    BrowserModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
