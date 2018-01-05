import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AddressModule } from './address/address.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HomeModule,
    AddressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
