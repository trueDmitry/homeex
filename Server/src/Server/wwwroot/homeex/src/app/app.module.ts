import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ListOfAddressComponent } from './list-of-address/list-of-address.component';
import { AddressItemComponent } from './address-item/address-item.component';
import { CreateAddressItemFormComponent } from './create-address-item-form/create-address-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ListOfAddressComponent,
    AddressItemComponent,
    CreateAddressItemFormComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
