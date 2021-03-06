import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Grupo1Module } from './grupo1/grupo1.module';
import { Grupo2Module } from './grupo2/grupo2.module';
import { Grupo3Module } from './grupo3/grupo3.module';
import { Grupo4Module } from './grupo4/grupo4.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Grupo1Module,
    Grupo2Module,
    Grupo3Module,
    Grupo4Module,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
