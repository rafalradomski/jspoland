import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MolegameModule } from "./molegame/molegame.module";

@NgModule({
  declarations: [AppComponent],
       imports: [BrowserModule, MolegameModule],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
