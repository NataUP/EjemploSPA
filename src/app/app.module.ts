import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { BodyComponent } from './Componentes/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
