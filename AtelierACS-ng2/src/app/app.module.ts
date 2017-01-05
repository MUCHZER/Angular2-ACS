import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { RequestComponent } from './request/request.component';
import { Four04Component } from './four04/four04.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    Four04Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
