import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MolegameModule } from "./molegame/molegame.module";
import {UtilesModule} from "./utiles/utiles.module";

@NgModule({
  declarations: [AppComponent],
       imports: [BrowserModule, MolegameModule, UtilesModule],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
