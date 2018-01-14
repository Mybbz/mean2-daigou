import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AddressModule } from './address/address.module';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    HomeModule,
    AddressModule,
    ShareModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
