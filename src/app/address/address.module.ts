import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressService } from './address.service';
import { AddrListComponent } from './addr-list/addr-list.component';
import { AddrFormComponent } from './addr-form/addr-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AddressService
  ],
  declarations: [AddressComponent, AddrListComponent, AddrFormComponent]
})
export class AddressModule { }
